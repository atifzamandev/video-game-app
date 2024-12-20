import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react'
import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import GenreList from '../components/GenreList'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'

const HomePage = () => (
  <Grid
    templateAreas={{
      base: `'main'`,
      lg: `'aside main'`,
    }}
    templateColumns={{ base: '1fr', lg: '200px 1fr' }}
  >
    <Show above='lg'>
      <GridItem area={'aside'} paddingX='0.5rem'>
        <GenreList />
      </GridItem>
    </Show>
    <GridItem area={'main'}>
      <Box paddingLeft={4}>
        <GameHeading />
        <Flex marginBottom={3}>
          <Box mr={5}>
            <PlatformSelector />
          </Box>
          <SortSelector />
        </Flex>
      </Box>
      <GameGrid />
    </GridItem>
  </Grid>
)

export default HomePage
