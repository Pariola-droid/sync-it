import { createClient } from '@supabase/supabase-js';
import NextAuth, { type NextAuthOptions } from 'next-auth';
import AppleProvider from 'next-auth/providers/apple';
import GoogleProvider from 'next-auth/providers/google';
import SpotifyProvider from 'next-auth/providers/spotify';

if (
  !process.env.NEXT_PUBLIC_SUPABASE_URL ||
  !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
) {
  throw new Error(
    'Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY'
  );
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

async function getOrCreateUserUUID(
  sub: string,
  provider: string
): Promise<string> {
  const { data, error } = await supabase
    .from('user_oauth_mapping')
    .select('uuid')
    .eq('oauth_sub', sub)
    .eq('provider', provider)
    .single();

  if (error && error.code === 'PGRST116') {
    // No matching record found, create a new one
    const newUUID = crypto.randomUUID();
    const { error: insertError } = await supabase
      .from('user_oauth_mapping')
      .insert({ oauth_sub: sub, provider: provider, uuid: newUUID });

    if (insertError) {
      throw new Error(
        `Failed to create new user mapping: ${insertError.message}`
      );
    }

    return newUUID;
  } else if (error) {
    throw new Error(`Error fetching user mapping: ${error.message}`);
  }

  return data.uuid;
}

export const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID!,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
      authorization: {
        params: {
          scope:
            'user-read-private user-read-email playlist-read-private playlist-modify-public playlist-modify-private',
        },
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope:
            'openid https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtube.force-ssl',
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
    AppleProvider({
      clientId: process.env.APPLE_CLIENT_ID!,
      clientSecret: process.env.APPLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account, user }) {
      if (account && user) {
        try {
          console.log('Account:', account);
          console.log('User:', user);

          const uuid = await getOrCreateUserUUID(user.id, account.provider);
          console.log('Generated UUID:', uuid);
          token.uuid = uuid;

          const expiresAt = account.expires_at
            ? new Date(account.expires_at * 1000).toISOString()
            : null;

          const upsertData = {
            user_id: uuid,
            platform: account.provider,
            access_token: account.access_token,
            refresh_token: account.refresh_token,
            expires_at: expiresAt,
          };
          console.log('Data to be upserted:', upsertData);

          const { data, error } = await supabase
            .from('user_platform_connections')
            .upsert(upsertData, { onConflict: 'user_id,platform' })
            .select();

          if (error) {
            console.error(
              'Error upserting into user_platform_connections:',
              error
            );
          } else {
            console.log(
              'Successfully upserted into user_platform_connections:',
              data
            );
          }
        } catch (error) {
          console.error('Error in jwt callback:', error);
        }
      }

      return token;
    },
    async session({ session, token }) {
      if (token.uuid) {
        const { data: connections, error } = await supabase
          .from('user_platform_connections')
          .select('platform, access_token, refresh_token, expires_at')
          .eq('user_id', token.uuid);

        if (error) {
          console.error('Error fetching user connections:', error);
        }

        session.providers =
          connections && connections.length > 0
            ? connections.reduce((acc, conn) => {
                acc[conn.platform] = {
                  accessToken: conn.access_token,
                  refreshToken: conn.refresh_token,
                  expiresAt: new Date(conn.expires_at).getTime(),
                };
                return acc;
              }, {})
            : {};
      }

      return session;
    },
  },
  debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
