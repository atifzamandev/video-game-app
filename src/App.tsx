import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export interface GameSearchParams {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}
function App() {
  const [gameSearchParams, setGameSearchParams] = useState<GameSearchParams>(
    {} as GameSearchParams
  );

  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'aside main'`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area={"nav"}>
        <NavBar
          onSearch={(searchText) =>
            setGameSearchParams({ ...gameSearchParams, searchText })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX="0.5rem">
          <GenreList
            selectedGenreId={gameSearchParams.genreId}
            onSelectGenre={(genre) =>
              setGameSearchParams({ ...gameSearchParams, genreId: genre.id })
            }
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={4}>
          <GameHeading gameSearchParams={gameSearchParams} />
          <Flex marginBottom={3}>
            <Box mr={5}>
              <PlatformSelector
                selectedPlatformId={gameSearchParams.platformId}
                onSelectPlatfrom={(platform) =>
                  setGameSearchParams({ ...gameSearchParams, platformId: platform.id })
                }
              />
            </Box>
            <SortSelector
              sortOrder={gameSearchParams.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameSearchParams({ ...gameSearchParams, sortOrder })
              }
            />
          </Flex>
        </Box>
        <GameGrid gameSearchParams={gameSearchParams} />
      </GridItem>
    </Grid>
  );
}

export default App;
