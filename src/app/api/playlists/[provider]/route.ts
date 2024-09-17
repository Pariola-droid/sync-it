import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { provider } = req.query;
  const isDestination = req.query.destination === 'true';

  let accessToken = isDestination
    ? session.destinationAccessToken
    : session.accessToken;
  let apiUrl;

  switch (provider) {
    case 'spotify':
      apiUrl = 'https://api.spotify.com/v1/me/playlists';
      break;
    case 'google':
      apiUrl =
        'https://www.googleapis.com/youtube/v3/playlists?part=snippet&mine=true';
      break;
    case 'apple':
      apiUrl = 'https://api.music.apple.com/v1/me/library/playlists';
      break;
    default:
      return res.status(400).json({ error: 'Invalid provider' });
  }

  try {
    const response = await fetch(apiUrl, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!response.ok) {
      throw new Error(`API responded with status ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching playlists:', error);
    res.status(500).json({ error: 'Failed to fetch playlists' });
  }
}
