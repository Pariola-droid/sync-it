import { IPlaylistPlatform } from '@/types/utils/platform';

import AppleMusicLogo from '../app/assets/images/platforms/apple-music-logo.webp';
import DeezerLogo from '../app/assets/images/platforms/deezer-logo.webp';
import SoundcloudLogo from '../app/assets/images/platforms/soundcloud-logo.webp';
import SpotifyLogo from '../app/assets/images/platforms/spotify-logo.webp';
import TidalLogo from '../app/assets/images/platforms/tidal-logo.webp';
import YoutubeMusicLogo from '../app/assets/images/platforms/youtube-music-logo.webp';

export const PlaylistPlatforms: IPlaylistPlatform[] = [
  {
    platform: 'spotify',
    name: 'Spotify',
    image: SpotifyLogo,
  },
  {
    platform: 'apple',
    name: 'Apple music',
    image: AppleMusicLogo,
  },
  {
    platform: 'google',
    name: 'YTmusic',
    image: YoutubeMusicLogo,
  },
  {
    platform: 'soundcloud',
    name: 'Soundcloud',
    image: SoundcloudLogo,
  },
  {
    platform: 'deezer',
    name: 'Deezer',
    image: DeezerLogo,
  },
  {
    platform: 'tidal',
    name: 'Tidal',
    image: TidalLogo,
  },
];
