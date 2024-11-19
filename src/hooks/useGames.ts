import { useInfiniteQuery } from '@tanstack/react-query'
import APIClient, { FetchResponse } from '../services/api-client'
import useSearchQueryParams from '../store'
import { Platform } from './usePlatforms'

export interface Game {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number
  rating_top: number
  slug: string
}

const apiClient = new APIClient<Game>('/games')

const useGames = () => {
  const gameQuery = useSearchQueryParams((state) => state.gameQuery)

  const query = useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery?.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined
    },
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })

  return query
}
export default useGames
