import { useQuery } from '@tanstack/react-query'
import APIClient, { FetchResponse } from '../services/api-client'
import Screenshots from '../types/Screenshots'

const useScreenShots = (gameId: number) => {
  const apiClient = new APIClient<Screenshots>(`/games/${gameId}/screenshots`)

  const query = useQuery<FetchResponse<Screenshots>, Error>({
    queryKey: ['screenshots', gameId],

    queryFn: apiClient.getAll,
  })

  return query
}

export default useScreenShots
