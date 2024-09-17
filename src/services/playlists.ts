import { useQuery } from '@tanstack/react-query';
import { request } from './api';

export const usePlaylistQuery = (args: any) => {
  return useQuery({
    queryKey: ['playlists'],
    queryFn: () => request.get('/playlists'),
    ...args,
  });
};

export const usePlaylistDetailsQuery = (playlistId: string, args: any) => {
  return useQuery({
    queryKey: ['playlistDetails', playlistId],
    queryFn: () => request.get(`/playlists/${playlistId}`),
    ...args,
  });
};
