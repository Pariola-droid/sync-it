import { useQuery } from '@tanstack/react-query';
import { request } from './api';

export const usePlaylistQuery = (args: any) => {
  return useQuery({
    queryKey: ['playlists'],
    queryFn: () => request.get('/playlists'),
    ...args,
  });
};
