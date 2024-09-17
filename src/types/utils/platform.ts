import { StaticImageData } from 'next/image';

export interface IPlaylistPlatform {
  platform: string;
  name: string;
  image: StaticImageData;
}
