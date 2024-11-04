import { create } from "zustand";

interface GameSearchParams {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameSearchParams;
  setSearchText: (searchText: string) => void;
  setSortOrder: (sortOrder: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatfromId: (platformId: number) => void;
}

const useSearchQueryParams = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setSortOrder: (sortOrder) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, sortOrder } })),
  setGenreId: (genreId) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, genreId } })),
  setPlatfromId: (platformId) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, platformId } })),
}));

export default useSearchQueryParams;
