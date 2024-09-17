import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';

async function getSpotifyPlaylistTracks(
  playlistId: string,
  accessToken: string
) {
  const response = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error('Failed to fetch Spotify playlist tracks');
  }
  return response.json();
}

async function createYouTubePlaylist(title: string, accessToken: string) {
  const response = await fetch(
    'https://www.googleapis.com/youtube/v3/playlists',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        snippet: {
          title,
          description: 'Synced playlist from Spotify',
        },
        status: {
          privacyStatus: 'private',
        },
      }),
    }
  );
  if (!response.ok) {
    throw new Error('Failed to create YouTube playlist');
  }
  return response.json();
}

async function addTracksToYouTubePlaylist(
  playlistId: string,
  tracks: any[],
  accessToken: string
) {
  for (const track of tracks) {
    const searchResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=${encodeURIComponent(
        `${track.track.name} ${track.track.artists[0].name}`
      )}&key=${process.env.YOUTUBE_API_KEY}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (!searchResponse.ok) {
      console.error(`Failed to search for track: ${track.track.name}`);
      continue;
    }
    const searchData = await searchResponse.json();
    if (searchData.items.length > 0) {
      const videoId = searchData.items[0].id.videoId;
      await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            snippet: {
              playlistId,
              resourceId: {
                kind: 'youtube#video',
                videoId,
              },
            },
          }),
        }
      );
    }
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session || !session.spotifyAccessToken || !session.googleAccessToken) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { selectedPlaylistId, playlistDestination } = await request.json();

  try {
    const spotifyTracks = await getSpotifyPlaylistTracks(
      selectedPlaylistId,
      session.spotifyAccessToken
    );

    // Create a new playlist on YouTube
    const youtubePlaylist = await createYouTubePlaylist(
      'Synced Spotify Playlist',
      session.googleAccessToken
    );

    // Add tracks to YouTube playlist
    await addTracksToYouTubePlaylist(
      youtubePlaylist.id,
      spotifyTracks.items,
      session.googleAccessToken
    );

    return NextResponse.json({ success: true, playlistId: youtubePlaylist.id });
  } catch (error) {
    console.error('Sync error:', error);
    return NextResponse.json(
      { error: 'Failed to sync playlist' },
      { status: 500 }
    );
  }
}
