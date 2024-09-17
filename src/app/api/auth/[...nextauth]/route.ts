import { refreshAccessToken } from '@/utils/refreshToken';
import NextAuth, { type NextAuthOptions } from 'next-auth';
import AppleProvider from 'next-auth/providers/apple';
import GoogleProvider from 'next-auth/providers/google';
import SpotifyProvider from 'next-auth/providers/spotify';

if (!process.env.SPOTIFY_CLIENT_ID || !process.env.SPOTIFY_CLIENT_SECRET) {
  throw new Error('Missing Spotify environment variables');
}

export const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID!,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: 'user-read-private user-read-email playlist-read-private',
        },
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: 'https://www.googleapis.com/auth/youtube.readonly',
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
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.expiresAt = account.expires_at;
        token.provider = account.provider;
      }

      if (token.expiresAt && Date.now() > token.expiresAt * 1000) {
        return refreshAccessToken(token);
      }

      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.provider = token.provider as string;
      session.error = token.error as string | undefined;
      return session;
    },
  },
  debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
