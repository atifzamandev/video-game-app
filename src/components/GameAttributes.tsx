import { SimpleGrid, Text } from '@chakra-ui/react'
import Game from '../types/Game'
import CriticScore from './CriticScore'
import DefinationItem from './DefinationItem'

interface Props {
  game: Game
}
const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid as='dl' columns={2}>
      <DefinationItem term='Platforms'>
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinationItem>
      <DefinationItem term='Metascore'>
        <CriticScore score={game.metacritic} />
      </DefinationItem>
      <DefinationItem term='Genres'>
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinationItem>
      <DefinationItem term='Publisher'>
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinationItem>
    </SimpleGrid>
  )
}

export default GameAttributes
