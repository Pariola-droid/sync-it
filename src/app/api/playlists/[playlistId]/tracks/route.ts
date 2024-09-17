import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';
import { authOptions } from '../../../auth/[...nextauth]/route';

export async function GET(
  request: Request,
  { params }: { params: { playlistId: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session || !session.accessToken) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const response = await fetch(
    `https://api.spotify.com/v1/playlists/${params.playlistId}/tracks`,
    {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    }
  );

  const data = await response.json();

  return NextResponse.json(data);
}
