import { Data } from '@repo/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface DataStore {
  data: Data | null;
  setData: (data: Data) => void;
  reset: () => void;
}

const useDataStore = create<DataStore>()(
  persist(
    set => ({
      data: null,
      setData: data => set({ data }),
      reset: () => set({ data: null }),
    }),
    {
      name: 'data-store',
    },
  ),
);

export default useDataStore;
