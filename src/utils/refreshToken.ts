import { TokenSet } from 'next-auth';

export async function refreshAccessToken(
  token: TokenSet,
  provider: string
): Promise<TokenSet> {
  try {
    const url = getRefreshUrl(provider);
    const payload = getRefreshPayload(provider, token.refreshToken as string);

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
      body: new URLSearchParams(payload),
    });

    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    console.error('RefreshAccessTokenError', error);
    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
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
