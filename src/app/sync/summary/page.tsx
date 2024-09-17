'use client';

import { usePlaylistStore } from '@/store/usePlaylistStore';
import { styled } from '@/styles';
import { useMutation, useQuery } from '@tanstack/react-query';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

async function fetchPlaylistDetails(playlistId: string) {
  const response = await fetch(`/api/spotify/playlists/${playlistId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch playlist details');
  }
  return response.json();
}

async function syncPlaylist(data: {
  selectedPlaylistId: string;
  playlistDestination: string;
}) {
  const response = await fetch('/api/sync-playlist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to sync playlist');
  }
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

  console.log(selectedPlaylistId, 'selectedPlaylistId');
  console.log(session, 'session');

  useEffect(() => {
    if (!selectedPlaylistId || !playlistSource || !playlistDestination) {
      router.push('/');
    }
  }, [selectedPlaylistId, playlistSource, playlistDestination]);

  const {
    data: playlistDetails,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['playlistDetails', selectedPlaylistId],
    queryFn: () => fetchPlaylistDetails(selectedPlaylistId!),
    enabled: !!playlistSource && !!session && session.provider === 'spotify',
  });

  const mutation = useMutation({
    mutationFn: syncPlaylist,
    onSuccess: () => {
      setIsSyncing(false);
      resetStore();
    },
    onError: (error) => {
      setIsSyncing(false);
    },
  });

  const handleSync = async () => {
    setIsSyncing(true);
    mutation.mutate({
      selectedPlaylistId: selectedPlaylistId!,
      playlistDestination: playlistDestination!,
    });

    //
    if (!session) {
      await signIn();
      return;
    }

    if (session.provider !== 'spotify') {
      await signIn('spotify');
      return;
    }

    if (playlistDestination === 'youtube' && session.provider !== 'google') {
      await signIn('google');
      return;
    }

    setIsSyncing(true);
    mutation.mutate({
      selectedPlaylistId: selectedPlaylistId!,
      playlistDestination: playlistDestination!,
    });
  };

  if (isLoading) return <div>Loading playlist details...</div>;
  if (error) return <div>Error fetching playlist details</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Summary</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Source Playlist</h2>
        <p>Platform: {playlistSource}</p>
        <p>Playlist: {playlistDetails?.name}</p>
        <p>Tracks: {playlistDetails?.tracks.total}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Destination</h2>
        <p>Platform: {playlistDestination}</p>
      </div>
      <SyncSubmitButton onClick={handleSync} disabled={isSyncing}>
        {isSyncing ? 'Syncing...' : 'Sync Playlist'}
      </SyncSubmitButton>
    </div>
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
