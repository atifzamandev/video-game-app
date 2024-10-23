import { useInfiniteQuery } from "@tanstack/react-query";
import { GameSearchParams } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = (gameSearchParams: GameSearchParams) => {
  const query = useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameSearchParams],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameSearchParams.genreId,
          parent_platforms: gameSearchParams?.platformId,
          ordering: gameSearchParams.sortOrder,
          search: gameSearchParams.searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return query;
};
export default useGames;
