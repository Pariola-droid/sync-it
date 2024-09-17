import { STORAGE_CONSTANTS } from '@/utils/constants';
import { webStorage } from '@/utils/storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AuthStore {
  spotifyAuth: boolean;
  youtubeAuth: boolean;
  setSpotifyAuth: (auth: boolean) => void;
  setYoutubeAuth: (auth: boolean) => void;
}

const initialState = {
  spotifyAuth: false,
  youtubeAuth: false,
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      ...initialState,
      setSpotifyAuth: (auth) => set({ spotifyAuth: auth }),
      setYoutubeAuth: (auth) => set({ youtubeAuth: auth }),
      resetStore: () => set(initialState),
    }),
    {
      name: STORAGE_CONSTANTS.userStorage,
      storage: createJSONStorage(() => webStorage),
    }
  )
);
