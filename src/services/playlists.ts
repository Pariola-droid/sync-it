import { useQuery } from '@tanstack/react-query';
import { request } from './api';

export const usePlaylistQuery = (args: {
  enabled: boolean;
  provider: string;
}) => {
  return useQuery({
    queryKey: ['playlists', args.provider],
    queryFn: () => request.get(`/playlists?provider=${args.provider}`),
    ...args,
  });
};

export const usePlaylistDetailsQuery = (
  playlistId: string,
  provider: string,
  args: any
) => {
  return useQuery({
    queryKey: ['playlistDetails', playlistId, provider],
    queryFn: () => request.get(`/playlists/${playlistId}?provider=${provider}`),
    ...args,
  });
};
