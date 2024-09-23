import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function refreshAccessToken(
  userId: string,
  provider: string
): Promise<void> {
  try {
    const { data: connection } = await supabase
      .from('user_platform_connections')
      .select('refresh_token')
      .eq('user_id', userId)
      .eq('platform', provider)
      .single();

    if (!connection) throw new Error('No connection found');

    const url = getRefreshUrl(provider);
    const payload = getRefreshPayload(provider, connection.refresh_token);

    const response = await fetch(url, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'POST',
      body: new URLSearchParams(payload),
    });

    const refreshedTokens = await response.json();

    if (!response.ok) throw refreshedTokens;

    await supabase
      .from('user_platform_connections')
      .update({
        access_token: refreshedTokens.access_token,
        refresh_token:
          refreshedTokens.refresh_token || connection.refresh_token,
        expires_at: new Date(
          Date.now() + refreshedTokens.expires_in * 1000
        ).toISOString(),
      })
      .eq('user_id', userId)
      .eq('platform', provider);
  } catch (error) {
    console.error('RefreshAccessTokenError', error);
    throw error;
  }
}

function getRefreshUrl(provider: string): string {
  switch (provider) {
    case 'spotify':
      return 'https://accounts.spotify.com/api/token';
    case 'google':
      return 'https://oauth2.googleapis.com/token';

    default:
      throw new Error(`Unsupported provider: ${provider}`);
  }
}

function getRefreshPayload(
  provider: string,
  refreshToken: string
): Record<string, string> {
  const basePayload = {
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
  };

  switch (provider) {
    case 'spotify':
      return {
        ...basePayload,
        client_id: process.env.SPOTIFY_CLIENT_ID!,
        client_secret: process.env.SPOTIFY_CLIENT_SECRET!,
      };
    case 'google':
      return {
        ...basePayload,
        client_id: process.env.GOOGLE_CLIENT_ID!,
        client_secret: process.env.GOOGLE_CLIENT_SECRET!,
      };

    default:
      throw new Error(`Unsupported provider: ${provider}`);
  }
}
