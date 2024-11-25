import { SimpleGrid } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import useScreenShots from '../hooks/useScreenShots'

const GameScreenshots = ({ gameId }: { gameId: number }) => {
  const { data, error, isLoading } = useScreenShots(gameId)

  if (isLoading) return null

  if (error) throw error

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
      {data?.results.map((sc) => (
        <Image key={sc.id} src={sc.image} />
      ))}
    </SimpleGrid>
  )
}

export default GameScreenshots
