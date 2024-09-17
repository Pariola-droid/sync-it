import { getServerSession } from 'next-auth/next';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';

async function fetchSpotifyPlaylists(accessToken: string) {
  const response = await fetch('https://api.spotify.com/v1/me/playlists', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!response.ok)
    throw new Error(`Spotify API responded with status ${response.status}`);
  return response.json();
}

async function fetchAppleMusicPlaylists(accessToken: string) {
  const developerToken = process.env.APPLE_MUSIC_DEVELOPER_TOKEN;

  const response = await fetch(
    'https://api.music.apple.com/v1/me/library/playlists',
    {
      headers: {
        Authorization: `Bearer ${developerToken}`,
        'Music-User-Token': accessToken,
      },
    }
  );

  if (!response.ok)
    throw new Error(`Apple Music API responded with status ${response.status}`);

  return response.json();
}

async function fetchYouTubeMusicPlaylists(accessToken: string) {
  const response = await fetch(
    'https://www.googleapis.com/youtube/v3/playlists?part=snippet&mine=true',
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!response.ok)
    throw new Error(`YouTube API responded with status ${response.status}`);

  return response.json();
}

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);

  console.log('Session in API route:', session);

  if (!session || !session.providers) {
    console.error('Unauthorized access attempt:', {
      hasSession: !!session,
      hasProviders: !!session?.providers,
    });
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Get the provider from the query string
  const url = new URL(request.url);
  const provider = url.searchParams.get('provider');

  if (!provider || !session.providers[provider]) {
    return NextResponse.json(
      { error: 'Invalid or missing provider' },
      { status: 400 }
    );
  }

  const accessToken = session.providers[provider].accessToken;

  try {
    let data;
    switch (provider) {
      case 'spotify':
        data = await fetchSpotifyPlaylists(accessToken);
        break;
      case 'apple':
        data = await fetchAppleMusicPlaylists(accessToken);
        break;
      case 'google':
        data = await fetchYouTubeMusicPlaylists(accessToken);
        break;
      default:
        throw new Error(`Unsupported provider: ${provider}`);
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Error fetching playlists:', error);
    return NextResponse.json(
      { error: 'Failed to fetch playlists', details: error.message },
      { status: 500 }
    );
  }
}
