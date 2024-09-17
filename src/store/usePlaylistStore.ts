import { STORAGE_CONSTANTS } from '@/utils/constants';
import { webStorage } from '@/utils/storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface PlaylistStore {
  selectedPlaylistId: string | null;
  playlistSource: string | null;
  playlistDestination: string | null;
  setSelectedPlaylistId: (id: string | null) => void;
  setPlaylistSource: (source: string) => void;
  setPlaylistDestination: (destination: string) => void;
  resetStore: () => void;
}

const initialState = {
  selectedPlaylistId: null,
  playlistSource: null,
  playlistDestination: null,
};

export const usePlaylistStore = create<PlaylistStore>()(
  persist(
    (set) => ({
      ...initialState,
      setSelectedPlaylistId: (id) => set({ selectedPlaylistId: id }),
      setPlaylistSource: (source) => set({ playlistSource: source }),
      setPlaylistDestination: (destination) =>
        set({ playlistDestination: destination }),
      resetStore: () => set(initialState),
    }),
    {
      name: STORAGE_CONSTANTS.playlistStorage,
      storage: createJSONStorage(() => webStorage),
    }
  )
);
