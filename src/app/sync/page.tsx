'use client';

import { IPlaylistPlatform } from '@/types/utils/platform';
import { PlaylistPlatforms } from '../../libs/platforms';

import { usePlaylistStore } from '@/store/usePlaylistStore';
import { styled } from '@/styles';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ChooseSourcePage() {
  const { data: session } = useSession();
  const router = useRouter();
  const { setPlaylistSource } = usePlaylistStore();

  const handleSourceSelect = async (platform: string) => {
    if (session?.providers && session.providers[platform]) {
      setPlaylistSource(platform);
      router.push('/sync/choose-playlist');
    } else {
      await signIn(platform, { callbackUrl: '/sync/choose-playlist' });
    }
  };

  return (
    <SourceGridSection>
      {PlaylistPlatforms.map((source: IPlaylistPlatform, index) => (
        <SourceOption
          key={`${index}-${source.platform}`}
          onClick={() => handleSourceSelect(source.platform)}
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
                {session?.providers && session.providers[source.platform]
                  ? `Continue with ${source.name}`
                  : `Connect ${source.name}`}
              </SelectSourceButton>
            </FixedHoverHeight>
          </SourceOptionMain>
        </SourceOption>
      ))}
    </SourceGridSection>
  );
}

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
