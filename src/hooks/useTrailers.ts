import { useQuery } from '@tanstack/react-query'
import APIClient from '../services/api-client'
import Trailer from '../types/Trailer'

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`)
  return useQuery({
    queryKey: ['game trailer', gameId],
    queryFn: apiClient.getAll,
  })
}

export default useTrailers
