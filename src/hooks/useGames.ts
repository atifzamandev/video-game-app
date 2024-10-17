import { useQuery } from "@tanstack/react-query";
import { GameSearchParams } from "../App";
import apiClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const fetchGames = async (
  gameSearchParams: GameSearchParams
): Promise<FetchResponse<Game>> => {
  const response = await apiClient.get<FetchResponse<Game>>("/games", {
    params: {
      genres: gameSearchParams.genre?.id,
      parent_platforms: gameSearchParams?.platform?.id,
      ordering: gameSearchParams.sortOrder,
      search: gameSearchParams.searchText,
    },
  });

  return response.data;
};

const useGames = (gameSearchParams: GameSearchParams) => {
  const query = useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameSearchParams],
    queryFn: () => fetchGames(gameSearchParams),
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return query;
};
export default useGames;
