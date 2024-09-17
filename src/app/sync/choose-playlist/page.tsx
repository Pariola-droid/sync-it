'use client';

import { usePlaylistQuery } from '@/services/playlists';
import { usePlaylistStore } from '@/store/usePlaylistStore';
import { useSession } from 'next-auth/react';

import { styled } from '@/styles';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

interface IPlaylist {
  id: string;
  name: string;
  images: { url: string }[];
  tracks: { total: number };
}

export default function ChoosePlaylistPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const { selectedPlaylistId, setSelectedPlaylistId } = usePlaylistStore();

  const formatPlaylists = useCallback((rawData: any, provider: string) => {
    switch (provider) {
      case 'spotify':
        return rawData?.data?.items?.map((item: any) => ({
          id: item.id,
          name: item.name,
          images: item.images,
          trackCount: item.tracks ? item.tracks.total : 'N/A',
        }));
      case 'apple':
        return rawData.data?.map((item: any) => ({
          id: item.id,
          name: item.attributes.name,
          images: item.attributes.artwork?.url,
          trackCount: item.attributes.trackCount,
        }));
      case 'google':
        return rawData.items?.map((item: any) => ({
          id: item.id,
          name: item.snippet.title,
          images: item.snippet.thumbnails.default.url,
          trackCount: 'N/A',
        }));
      default:
        return [];
    }
  }, []);

  const {
    data: rawPlaylists,
    isLoading,
    error,
  } = usePlaylistQuery({
    enabled: !!session?.accessToken,
  });

  const handlePlaylistSelect = (playlistId: string) => {
    selectedPlaylistId === playlistId
      ? setSelectedPlaylistId(null)
      : setSelectedPlaylistId(playlistId);
  };

  if (isLoading) return <div>Loading playlists...</div>;
  if (error) return <div>Error fetching playlists</div>;

  const playlists = formatPlaylists(rawPlaylists, session?.provider as string);
  console.log(rawPlaylists, 'playlists raw');

  return (
    <ChoosePlaylistSection>
      <PlaylistGrid>
        {playlists?.map((playlist: IPlaylist) => (
          <PlaylistButton
            key={playlist.id}
            selected={selectedPlaylistId === playlist.id}
            onClick={() => handlePlaylistSelect(playlist.id)}
          >
            <ImageSlot
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {playlist.images && playlist.images.length > 0 ? (
                <Image
                  src={playlist.images[0].url}
                  alt={playlist.name}
                  width={50}
                  height={50}
                />
              ) : (
                <FallbackImage />
              )}
            </ImageSlot>

            <MetaDetails>
              <MetaName>{playlist.name}</MetaName>
              <MetaTracksTotal>Tracks: {playlist.trackCount}</MetaTracksTotal>
            </MetaDetails>
          </PlaylistButton>
        ))}
      </PlaylistGrid>

      {selectedPlaylistId !== null && (
        <ProceedButton onClick={() => router.push('/sync/choose-destination')}>
          Choose destination
        </ProceedButton>
      )}
    </ChoosePlaylistSection>
  );
}

const ChoosePlaylistSection = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  gap: '1rem',
  position: 'relative',
});

const PlaylistGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  rowGap: 'calc(2rem - $4)',
  columnGap: 'calc(2rem - $4)',
  width: '100%',
});

const PlaylistButton = styled('button', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: '$3',
  outline: 'none',
  paddingInline: '$2',
  paddingBlock: '$2',
  borderRadius: '$1',
  border: '1px solid transparent',
  transition: '300ms ease',

  '&:hover': {
    backgroundColor: '$ghostWhite',
    borderColor: '#06060615',
  },

  variants: {
    selected: {
      true: {
        backgroundColor: '#f2f2f2',
      },
    },
  },
});

const ImageSlot = styled(motion.div, {
  width: '60px',
  height: '60px',
  borderRadius: '$1',
  overflow: 'hidden',
  cursor: 'zoom-in',

  '&:hover': {
    boxShadow:
      '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },

  '& img': {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
});

const FallbackImage = styled('div', {
  width: '100%',
  height: '100%',
  backgroundColor: '$midnight',
});

const MetaDetails = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  rowGap: '$1',
  paddingTop: '$1',
});

const MetaName = styled('h4', {
  fontSize: '$body1',
  fontWeight: 500,
  lineHeight: 'normal',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  maxWidth: '170px',
});

const MetaTracksTotal = styled('p', {
  fontSize: '$body2',
  fontWeight: 400,
  color: '$granite',
  cursor: 'pointer',
});

const ProceedButton = styled('button', {
  width: '80%',
  height: '3rem',
  backgroundColor: '$midnight',
  color: '$white',
  fontSize: '$body1',
  fontWeight: '$2',
  lineHeight: 'normal',
  paddingInline: '1rem',
  br: '$2',
  cursor: 'pointer',
  display: 'grid',
  placeItems: 'center',
  transition: '300ms ease',
  position: 'sticky',
  bottom: '10px',

  '&:disabled': {
    opacity: 0.6,
  },
});
