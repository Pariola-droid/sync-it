'use client';

import { PlaylistPlatforms } from '@/libs/platforms';
import { IPlaylistPlatform } from '@/types/utils/platform';

import { usePlaylistStore } from '@/store/usePlaylistStore';
import { styled } from '@/styles';
import { createClient } from '@supabase/supabase-js';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ChooseDestinationPage() {
  const router = useRouter();
  const { data: session, update: updateSession } = useSession();
  const { playlistSource, setPlaylistDestination, playlistDestination } =
    usePlaylistStore();
  const [connectedPlatforms, setConnectedPlatforms] = useState<string[]>([]);

  useEffect(() => {
    async function fetchConnectedPlatforms() {
      if (session?.user?.id) {
        const { data, error } = await supabase
          .from('user_platform_connections')
          .select('platform')
          .eq('user_id', session.user.id);

        if (error) {
          console.error('Error fetching connected platforms:', error);
        } else {
          setConnectedPlatforms(data.map((conn) => conn.platform));
        }
      }
    }

    fetchConnectedPlatforms();
  }, [session]);

  console.log('connectedPlatforms:', connectedPlatforms);

  const handleDestinationSelect = async (platform: string) => {
    if (platform === playlistSource) {
      // Can't select the same platform as source and destination
      return;
    }

    if (connectedPlatforms.includes(platform)) {
      // Already authenticated with this platform
      setPlaylistDestination(platform);
      router.push('/sync/summary');
    } else {
      // Need to authenticate with this platform
      try {
        const result = await signIn(platform, { redirect: false });
        if (result?.error) {
          throw new Error(result.error);
        }
        // Update the session to reflect the new authentication
        await updateSession();
        setPlaylistDestination(platform);
        router.push('/sync/summary');
      } catch (error) {
        console.error('Authentication failed:', error);
        // Handle the error (e.g., show an error message to the user)
      }
    }
  };

  return (
    <SourceGridSection>
      {PlaylistPlatforms.map((source: IPlaylistPlatform, index) => (
        <SourceOption
          key={`${index}-${source.platform}`}
          onClick={() => handleDestinationSelect(source.platform)}
          selected={playlistDestination === source.platform}
          existing={playlistSource === source.platform}
          disabled={playlistSource === source.platform}
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
                {playlistSource === source.platform
                  ? 'Selected source'
                  : connectedPlatforms.includes(source.platform)
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

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    existing: {
      true: {
        zIndex: 3,

        '& .source-option-main': {
          height: '140px',
          border: '1px solid #66666650',

          '& .select-source-button': {
            opacity: 1,
          },
        },
      },
    },
    selected: {
      true: {
        zIndex: 3,

        '& .source-option-main': {
          height: '140px',
          border: '1px solid #66666650',

          '& .select-source-button': {
            opacity: 1,
          },
        },
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
