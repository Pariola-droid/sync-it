import AppleMusicLogo from '@/app/assets/images/platforms/apple-music-logo.webp';
import DeezerLogo from '@/app/assets/images/platforms/deezer-logo.webp';
import SoundcloudLogo from '@/app/assets/images/platforms/soundcloud-logo.webp';
import SpotifyLogo from '@/app/assets/images/platforms/spotify-logo.webp';
import TidalLogo from '@/app/assets/images/platforms/tidal-logo.webp';
import YoutubeMusicLogo from '@/app/assets/images/platforms/youtube-music-logo.webp';

import usePlaylistStore from '@/store/usePlaylistStore';
import { styled } from '@/styles';
import { signIn } from 'next-auth/react';
import Image, { StaticImageData } from 'next/image';
import { toast } from 'sonner';

interface ISourcePlatform {
  id: string;
  name: string;
  image: StaticImageData;
}

const SourcePlatforms: ISourcePlatform[] = [
  {
    id: 'spotify',
    name: 'Spotify',
    image: SpotifyLogo,
  },
  {
    id: 'apple',
    name: 'Apple music',
    image: AppleMusicLogo,
  },
  {
    id: 'youtube',
    name: 'Youtube music',
    image: YoutubeMusicLogo,
  },
  {
    id: 'soundcloud',
    name: 'Soundcloud',
    image: SoundcloudLogo,
  },
  {
    id: 'deezer',
    name: 'Deezer',
    image: DeezerLogo,
  },
  {
    id: 'tidal',
    name: 'Tidal',
    image: TidalLogo,
  },
];

const SourceSection = () => {
  const setSelectedPlatform = usePlaylistStore(
    (state) => state.setSelectedPlatform
  );

  const handleSourceSelect = async (platformId: string) => {
    setSelectedPlatform(platformId);
    try {
      await signIn(platformId, { callbackUrl: '/sync/choose-playlist' });
    } catch (error) {
      console.error('Authentication failed:', error);
      toast.error('Authentication failed. Please try again.');
    }
  };
  return (
    <SourceGridSection>
      {SourcePlatforms.map((source: ISourcePlatform, index) => (
        <SourceOption
          key={`${index}-${source.id}`}
          onClick={() => handleSourceSelect(source.id)}
        >
          <SourceOptionMain className="source-option-main">
            <FixedHoverHeight>
              <SourceMeta>
                <Image
                  src={source.image}
                  alt={source.name}
                  width={120}
                  height={90}
                />
              </SourceMeta>
              <SelectSourceButton className="select-source-button">
                Select {source.name}
              </SelectSourceButton>
            </FixedHoverHeight>
          </SourceOptionMain>
        </SourceOption>
      ))}
    </SourceGridSection>
  );
};

const SourceGridSection = styled('section', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
  gap: '$4',

  '& *': {
    lineHeight: 'normal',
    fontSize: '0.875rem',
    color: '$midnight',
  },
});

const SourceOption = styled('button', {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  height: '100px',
  borderRadius: '$1',
  backgroundColor: '#FAFBFB50',
  transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  cursor: 'pointer',
  outline: 'none',
  border: 'none',

  '&:nth-child(4)': {
    '& img': {
      width: '106px',
      height: '80px',
    },
  },

  '&:hover': {
    zIndex: 2,

    '& .source-option-main': {
      height: '140px',
      border: '1px solid #66666630',

      '& .select-source-button': {
        opacity: 1,
      },
    },
  },
});

const SourceOptionMain = styled('div', {
  width: '100%',
  height: '100px',
  transition: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'absolute',
  top: '0',
  overflow: 'hidden',
  borderRadius: 'inherit',
  backgroundColor: 'inherit',
  border: '1px solid #66666615',
});

const FixedHoverHeight = styled('div', {
  height: '100%',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: 'inherit',
});

const SourceMeta = styled('div', {
  height: '100px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& img': {
    width: '120px',
    height: '90px',
  },
});

const SelectSourceButton = styled('div', {
  paddingInline: '1rem',
  paddingBlock: '0.5rem',
  color: '$midnight',
  fontSize: '0.875rem',
  fontWeight: '$3',
  borderTop: '1px solid #66666615',
  cursor: 'pointer',
  transition: 'all 300ms ease-in-out',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '40px',
  opacity: 0,
  margin: '0 auto',
  backgroundColor: '$ghostWhite',
});

export default SourceSection;
