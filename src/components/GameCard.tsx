import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import getCropedImageUrl from '../services/image-url'
import { Game } from '../types/Game'
import CriticScore from './CriticScore'
import Emoji from './Emoji'
import PlatformIconList from './PlatformIconList'

interface Props {
  game: Game
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCropedImageUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <HStack justify='space-between' marginBottom={2}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize='2xl'>
          <Link to={`/games/${game.slug}`}>{game.name}</Link>
        </Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  )
}

export default GameCard
