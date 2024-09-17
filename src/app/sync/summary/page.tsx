'use client';

import { usePlaylistDetailsQuery } from '@/services/playlists';
import { usePlaylistStore } from '@/store/usePlaylistStore';
import { styled } from '@/styles';
import { useMutation } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

async function syncPlaylist(playlistData: any) {
  const response = await fetch('/api/sync-playlist', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(playlistData),
  });
  if (!response.ok) throw new Error('Failed to sync playlist');
  return response.json();
}

export default function SyncSummaryPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const {
    selectedPlaylistId,
    resetStore,
    playlistSource,
    playlistDestination,
  } = usePlaylistStore();
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncedPlaylistUrl, setSyncedPlaylistUrl] = useState<string | null>(
    null
  );

  useEffect(() => {
    if (!selectedPlaylistId || !playlistSource || !playlistDestination) {
      router.push('/sync/choose-source');
    }
  }, [selectedPlaylistId, playlistSource, playlistDestination, router]);

  const {
    data: playlistDetails,
    isLoading,
    error,
  } = usePlaylistDetailsQuery(selectedPlaylistId!, playlistSource, {
    enabled: !!playlistSource && !!session?.providers?.[playlistSource],
  });

  console.log('playlistDetails:', playlistDetails);

  const mutation = useMutation({
    mutationFn: syncPlaylist,
    onSuccess: (data) => {
      setIsSyncing(false);
      setSyncedPlaylistUrl(data.url);
    },
    onError: (error) => {
      setIsSyncing(false);
      console.error('Sync failed:', error);
    },
  });

  const handleSync = async () => {
    if (
      !session?.providers?.[playlistSource] ||
      !session?.providers?.[playlistDestination]
    ) {
      console.error('Not authenticated with both platforms');
      return;
    }

    setIsSyncing(true);
    mutation.mutate({
      sourcePlaylistId: selectedPlaylistId,
      sourcePlatform: playlistSource,
      destinationPlatform: playlistDestination,
    });
  };

  if (isLoading) return <div>Loading playlist details...</div>;
  if (error) return <div>Error fetching playlist details</div>;

  const getPlaylistImage = () => {
    switch (playlistSource) {
      case 'spotify':
        return playlistDetails?.images?.[0]?.url;
      case 'google':
        return playlistDetails?.items?.[0]?.snippet?.thumbnails?.default?.url;
      default:
        return null;
    }
  };

  const getPlaylistName = () => {
    switch (playlistSource) {
      case 'spotify':
        return playlistDetails?.name;
      case 'google':
        return playlistDetails?.items?.[0]?.snippet?.title;
      default:
        return 'Unknown';
    }
  };

  const getTrackCount = () => {
    switch (playlistSource) {
      case 'spotify':
        return playlistDetails?.tracks?.total;
      case 'google':
        return 'N/A';
      default:
        return 'Unknown';
    }
  };

  const getExternalUrl = () => {
    switch (playlistSource) {
      case 'spotify':
        return playlistDetails?.external_urls?.spotify;
      case 'google':
        return `https://www.youtube.com/playlist?list=${selectedPlaylistId}`;
      default:
        return '#';
    }
  };

  return (
    <SyncSummarySection>
      <PlaylistSummarySection>
        <ImageSlot whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          {getPlaylistImage() ? (
            <Image
              src={getPlaylistImage()!}
              alt={getPlaylistName()}
              width={140}
              height={140}
            />
          ) : (
            <FallbackImage />
          )}
        </ImageSlot>
        <PlaylistMeta>
          <p>
            Tracks: <span>{getTrackCount()}</span>
          </p>
          <p>
            Platform: <span>{playlistSource}</span>
          </p>
          <p>
            Playlist: <span>{getPlaylistName()}</span>
          </p>
          <p>
            Source:{' '}
            <span>
              <a
                href={getExternalUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                view on {playlistSource}
              </a>
            </span>
          </p>
        </PlaylistMeta>
      </PlaylistSummarySection>

      <DestinationMeta>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Destination</h2>
          <p>Platform: {playlistDestination}</p>
        </div>
        <SyncSubmitButton onClick={handleSync} disabled={isSyncing}>
          {isSyncing ? 'Syncing...' : 'Sync Playlist'}
        </SyncSubmitButton>
      </DestinationMeta>

      <GeneratedDestinationUrl>
        {mutation.data && (
          <p>
            Playlist synced successfully!{' '}
            <a
              href={syncedPlaylistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              View on {playlistDestination}
            </a>
          </p>
        )}
      </GeneratedDestinationUrl>
    </SyncSummarySection>
  );
}

const SyncSummarySection = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  gap: '2rem',
  position: 'relative',
});

const PlaylistSummarySection = styled('div', {
  display: 'grid',
  gridTemplateColumns: '150px 1fr',
  width: '100%',
  paddingInline: '$4',
  columnGap: '$5',
});

const ImageSlot = styled(motion.div, {
  width: '150px',
  height: '150px',
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
    borderRadius: 'inherit',
  },
});

const FallbackImage = styled('div', {
  width: '100%',
  height: '100%',
  backgroundColor: '$midnight',
});

const PlaylistMeta = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  '& p': {
    color: '$midnight',
    fontSize: '1rem',
    fontWeight: '$2',
    lineHeight: 'normal',

    '& span': {
      fontSize: '0.875rem',
      color: '$granite',
      fontWeight: '$2',
      width: '100%',
      opacity: 0.8,
      transition: 'opacity 300ms',

      '&:hover': {
        opacity: 1,
      },

      '& a': {
        display: 'inline-flex',
        alignItems: 'center',
        columnGap: '0.12rem',
        color: '$granite',
        lineHeight: 'normal',
        textDecoration: 'none',
        position: 'relative',
        opacity: 0.8,

        '&::before': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '10%',
          bottom: 0,
          backgroundColor: '$midnight',
          opacity: 0.15,
          zIndex: -1,
          transition: 'opacity 300ms, cubic-bezier(0.4, 0, 0.2, 1) 300ms',
        },

        '&:hover': {
          opacity: 1,

          '&::before': {
            opacity: 0.2,
            height: '35%',
          },
        },
      },
    },
  },
});

const GeneratedDestinationUrl = styled('div', {
  marginTop: '$4',
  padding: '$2',
  border: '1px solid #06060615',
  transition: '300ms ease',
  backgroundColor: '$ghostWhite',
  borderRadius: '$1',
  width: '100%',
  height: '3.5rem',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:hover': {
    borderColor: '#06060630',
  },

  '& p': {
    fontSize: '0.875rem',
    fontWeight: '$3',
    color: '$midnight',
  },
});

const DestinationMeta = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '100%',
});

const SyncSubmitButton = styled('button', {
  paddingInline: '1rem',
  paddingBlock: '0.5rem',
  color: '$ghostWhite',
  fontSize: '0.875rem',
  fontWeight: '$3',
  borderTop: '1px solid #66666615',
  cursor: 'pointer',
  transition: 'all 300ms ease-in-out',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '3rem',
  margin: '0 auto',
  backgroundColor: '$midnight',

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});
