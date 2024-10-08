import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';
import { authOptions } from '../../auth/[...nextauth]/route';

async function fetchSpotifyPlaylistDetails(
  playlistId: string,
  accessToken: string
) {
  const response = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );

  if (!response.ok) {
    throw new Error(`Spotify API responded with status ${response.status}`);
  }

  return response.json();
}

async function fetchYouTubeMusicPlaylistsDetails(
  playlistId: string,
  accessToken: string
) {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`YouTube API responded with status ${response.status}`);
  }

  return response.json();
}

export async function GET(
  request: Request,
  { params }: { params: { playlistId: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session || !session.accessToken) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const playlistId = params.playlistId;

  try {
    let data;
    switch (session.provider) {
      case 'spotify':
        data = await fetchSpotifyPlaylistDetails(
          playlistId,
          session.accessToken
        );
        break;
      case 'apple':
        data = 'Apple Music playlists are not supported';
        break;
      case 'google':
        data = await fetchYouTubeMusicPlaylistsDetails(
          playlistId,
          session.accessToken
        );
        break;
      default:
        throw new Error(`Unsupported provider: ${session.provider}`);
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Error fetching playlists details:', error);
    return NextResponse.json(
      { error: 'Failed to fetch playlists details', details: error.message },
      { status: 500 }
    );
  }
}
