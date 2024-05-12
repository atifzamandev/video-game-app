import { GameSearchParams } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameSearchParams: GameSearchParams) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameSearchParams.genre?.id,
        parent_platforms: gameSearchParams?.platform?.id,
        ordering: gameSearchParams.sortOrder,
      },
    },
    [gameSearchParams]
  );

export default useGames;
