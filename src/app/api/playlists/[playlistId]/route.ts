import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';
import { authOptions } from '../../auth/[...nextauth]/route';

export async function GET(
  request: Request,
  { params }: { params: { playlistId: string } }
) {
  console.log('Playlist details route hit', params);

  const session = await getServerSession(authOptions);

  if (!session || !session.accessToken) {
    console.log('No session or access token');
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const playlistId = params.playlistId;
  console.log('Fetching details for playlist:', playlistId);

  try {
    const response = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}`,
      {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      }
    );

    console.log('Spotify API response status:', response.status);

    if (!response.ok) {
      throw new Error(`Spotify API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching playlist details:', error);
    return NextResponse.json(
      { error: 'Failed to fetch playlist details' },
      { status: 500 }
    );
  }
}
