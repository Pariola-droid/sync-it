import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';
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

export async function GET() {
  const session = await getServerSession(authOptions);

  console.log('Session in API route:', session);

  if (!session || !session.accessToken || !session.provider) {
    console.error('Unauthorized access attempt:', {
      hasSession: !!session,
      hasAccessToken: !!session?.accessToken,
      provider: session?.provider,
    });
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    let data;
    switch (session.provider) {
      case 'spotify':
        data = await fetchSpotifyPlaylists(session.accessToken);
        break;
      case 'apple':
        data = await fetchAppleMusicPlaylists(session.accessToken);
        break;
      case 'google':
        data = await fetchYouTubeMusicPlaylists(session.accessToken);
        break;
      default:
        throw new Error(`Unsupported provider: ${session.provider}`);
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching playlists:', error);
    return NextResponse.json(
      { error: 'Failed to fetch playlists', details: error.message },
      { status: 500 }
    );
  }
}
