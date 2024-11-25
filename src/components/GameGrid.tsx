import { SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import useGames from '../hooks/useGames'
import Game from '../types/Game'
import GameCard from './GameCard'
import GameCardContainer from './GameCardContainer'
import GameCardSkeleton from './GameCardSkeleton'

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames()

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

  if (error) return <Text>{error.message}</Text>

  const fetchedGamesCount = data?.pages.reduce(
    (total, page) => total + page.results.length,
    0
  )

  return (
    // <Box>
    <InfiniteScroll
      dataLength={fetchedGamesCount ?? 0}
      hasMore={hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4, '2xl': 5 }}
        padding={4}
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game: Game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>

    /* <Button onClick={() => fetchNextPage()}>
        {isFetchingNextPage ? "Loading.." : "Load More"}
      </Button> *

    /* </Box> */
  )
}

export default GameGrid
