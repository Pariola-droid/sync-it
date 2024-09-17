import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route';
interface Track {
  name: string;
  artists: string[];
  album: string;
  id: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { sourcePlaylistId, sourcePlatform, destinationPlatform } = req.body;

  try {
    // 1. Fetch the source playlist details
    const sourcePlaylist = await fetchSourcePlaylist(
      sourcePlatform,
      sourcePlaylistId,
      session.accessToken
    );

    // 2. Create a new playlist on the destination platform
    const newPlaylist = await createDestinationPlaylist(
      destinationPlatform,
      sourcePlaylist.name,
      session.accessToken
    );

    // 3. Add tracks to the new playlist
    await addTracksToDestinationPlaylist(
      destinationPlatform,
      newPlaylist.id,
      sourcePlaylist.tracks,
      session.accessToken
    );

    res.status(200).json({ url: newPlaylist.url });
  } catch (error) {
    console.error('Sync failed:', error);
    res.status(500).json({ error: 'Failed to sync playlist' });
  }
}

async function fetchSourcePlaylist(
  platform: string,
  playlistId: string,
  token: string
): Promise<{ name: string; tracks: Track[] }> {
  switch (platform) {
    case 'spotify':
      return fetchSpotifyPlaylist(playlistId, token);
    case 'apple':
      return fetchAppleMusicPlaylist(playlistId, token);
    case 'youtube':
      return fetchYouTubePlaylist(playlistId, token);
    default:
      throw new Error(`Unsupported platform: ${platform}`);
  }
}

async function createDestinationPlaylist(
  platform: string,
  name: string,
  token: string
): Promise<{ id: string; url: string }> {
  switch (platform) {
    case 'spotify':
      return createSpotifyPlaylist(name, token);
    case 'apple':
      return createAppleMusicPlaylist(name, token);
    case 'youtube':
      return createYouTubePlaylist(name, token);
    default:
      throw new Error(`Unsupported platform: ${platform}`);
  }
}

async function addTracksToDestinationPlaylist(
  platform: string,
  playlistId: string,
  tracks: Track[],
  token: string
): Promise<void> {
  switch (platform) {
    case 'spotify':
      return addTracksToSpotifyPlaylist(playlistId, tracks, token);
    case 'apple':
      return addTracksToAppleMusicPlaylist(playlistId, tracks, token);
    case 'youtube':
      return addTracksToYouTubePlaylist(playlistId, tracks, token);
    default:
      throw new Error(`Unsupported platform: ${platform}`);
  }
}

// Spotify functions
async function fetchSpotifyPlaylist(
  playlistId: string,
  token: string
): Promise<{ name: string; tracks: Track[] }> {
  const response = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  if (!response.ok) throw new Error('Failed to fetch Spotify playlist');
  const data = await response.json();

  return {
    name: data.name,
    tracks: data.tracks.items.map((item: any) => ({
      name: item.track.name,
      artists: item.track.artists.map((artist: any) => artist.name),
      album: item.track.album.name,
      id: item.track.id,
    })),
  };
}

async function createSpotifyPlaylist(
  name: string,
  token: string
): Promise<{ id: string; url: string }> {
  const response = await fetch('https://api.spotify.com/v1/me/playlists', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, public: false }),
  });
  if (!response.ok) throw new Error('Failed to create Spotify playlist');
  const data = await response.json();
  return { id: data.id, url: data.external_urls.spotify };
}

async function addTracksToSpotifyPlaylist(
  playlistId: string,
  tracks: Track[],
  token: string
): Promise<void> {
  const uris = tracks.map((track) => `spotify:track:${track.id}`);
  const response = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ uris }),
    }
  );
  if (!response.ok) throw new Error('Failed to add tracks to Spotify playlist');
}

// Apple Music functions
async function fetchAppleMusicPlaylist(
  playlistId: string,
  token: string
): Promise<{ name: string; tracks: Track[] }> {
  const response = await fetch(
    `https://api.music.apple.com/v1/catalog/{{storefront}}/playlists/${playlistId}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  if (!response.ok) throw new Error('Failed to fetch Apple Music playlist');
  const data = await response.json();

  return {
    name: data.data[0].attributes.name,
    tracks: data.data[0].relationships.tracks.data.map((item: any) => ({
      name: item.attributes.name,
      artists: [item.attributes.artistName],
      album: item.attributes.albumName,
      id: item.id,
    })),
  };
}

async function createAppleMusicPlaylist(
  name: string,
  token: string
): Promise<{ id: string; url: string }> {
  const response = await fetch(
    'https://api.music.apple.com/v1/me/library/playlists',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ attributes: { name } }),
    }
  );
  if (!response.ok) throw new Error('Failed to create Apple Music playlist');
  const data = await response.json();
  return {
    id: data.data[0].id,
    url: `https://music.apple.com/us/playlist/${data.data[0].id}`,
  };
}

async function addTracksToAppleMusicPlaylist(
  playlistId: string,
  tracks: Track[],
  token: string
): Promise<void> {
  const response = await fetch(
    `https://api.music.apple.com/v1/me/library/playlists/${playlistId}/tracks`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: tracks.map((track) => ({ id: track.id, type: 'songs' })),
      }),
    }
  );
  if (!response.ok)
    throw new Error('Failed to add tracks to Apple Music playlist');
}

// YouTube Music functions
async function fetchYouTubePlaylist(
  playlistId: string,
  token: string
): Promise<{ name: string; tracks: Track[] }> {
  const youtube = google.youtube({ version: 'v3', auth: token });
  const { data: playlistData } = await youtube.playlists.list({
    part: ['snippet'],
    id: [playlistId],
  });
  const { data: playlistItems } = await youtube.playlistItems.list({
    part: ['snippet'],
    playlistId: playlistId,
    maxResults: 50, // You might need to implement pagination for larger playlists
  });

  return {
    name: playlistData.items![0].snippet!.title!,
    tracks: playlistItems.items!.map((item: any) => ({
      name: item.snippet.title,
      artists: [item.snippet.videoOwnerChannelTitle],
      album: 'N/A', // YouTube doesn't have a direct equivalent to albums
      id: item.snippet.resourceId.videoId,
    })),
  };
}

async function createYouTubePlaylist(
  name: string,
  token: string
): Promise<{ id: string; url: string }> {
  const youtube = google.youtube({ version: 'v3', auth: token });
  const { data } = await youtube.playlists.insert({
    part: ['snippet,status'],
    requestBody: {
      snippet: { title: name, tags: ['spotify', 'synced', 'music'] },
      status: { privacyStatus: 'public' },
    },
  });
  return {
    id: data.id!,
    url: `https://www.youtube.com/playlist?list=${data.id}`,
  };
}

async function addTracksToYouTubePlaylist(
  playlistId: string,
  tracks: Track[],
  token: string
): Promise<void> {
  const youtube = google.youtube({ version: 'v3', auth: token });
  for (const track of tracks) {
    await youtube.playlistItems.insert({
      part: ['snippet'],
      requestBody: {
        snippet: {
          playlistId: playlistId,
          resourceId: { kind: 'youtube#video', videoId: track.id },
        },
      },
    });
  }
}
