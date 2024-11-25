import { Flex } from '@chakra-ui/react'
import useTrailers from '../hooks/useTrailers'

const GameTrailer = ({ gameId }: { gameId: number }) => {
  const { data, error, isLoading } = useTrailers(gameId)

  if (isLoading) return null

  if (error) throw error

  const trailerFrist = data?.results[0]

  return trailerFrist ? (
    <Flex justifyContent='center' marginBottom={4}>
      <video
        width='auto'
        src={trailerFrist.data[480]}
        poster={trailerFrist.preview}
        controls
      />
    </Flex>
  ) : null
}

export default GameTrailer
