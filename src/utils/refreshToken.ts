import { JWT } from 'next-auth/jwt';

interface RefreshTokenResponse {
  access_token: string;
  expires_in: number;
  refresh_token?: string;
}

async function refreshSpotifyToken(token: JWT): Promise<RefreshTokenResponse> {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.SPOTIFY_CLIENT_ID!,
      client_secret: process.env.SPOTIFY_CLIENT_SECRET!,
      grant_type: 'refresh_token',
      refresh_token: token.refreshToken as string,
    }),
  });

  return response.json();
}

async function refreshGoogleToken(token: JWT): Promise<RefreshTokenResponse> {
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID!,
      client_secret: process.env.GOOGLE_CLIENT_SECRET!,
      grant_type: 'refresh_token',
      refresh_token: token.refreshToken as string,
    }),
  });

  return response.json();
}

async function refreshAppleToken(token: JWT): Promise<RefreshTokenResponse> {
  // Apple's refresh token process is different and may require additional steps
  // This is a placeholder and needs to be implemented according to Apple's specifications
  throw new Error('Apple token refresh not implemented');
}

export async function refreshAccessToken(token: JWT): Promise<JWT> {
  try {
    let refreshedTokens: RefreshTokenResponse;

    switch (token.provider) {
      case 'spotify':
        refreshedTokens = await refreshSpotifyToken(token);
        break;
      case 'google':
        refreshedTokens = await refreshGoogleToken(token);
        break;
      case 'apple':
        refreshedTokens = await refreshAppleToken(token);
        break;
      default:
        throw new Error(`Unsupported provider: ${token.provider}`);
    }

    if (!refreshedTokens.access_token) {
      throw new Error('Failed to refresh access token');
    }

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      expiresAt: Math.floor(Date.now() / 1000 + refreshedTokens.expires_in),
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    console.error('Error refreshing access token', error);
    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
  }
}
