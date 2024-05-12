import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatform";

export interface GameSearchParams {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
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
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area={"aside"} paddingX='0.5rem'>
          <GenreList
            selectedGenre={gameSearchParams.genre}
            onSelectGenre={(genre) =>
              setGameSearchParams({ ...gameSearchParams, genre })
            }
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Flex marginBottom={3}>
          <Box mr={5}>
            <PlatformSelector
              selectedPlatform={gameSearchParams.platform}
              onSelectPlatfrom={(platform) =>
                setGameSearchParams({ ...gameSearchParams, platform })
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
        <GameGrid gameSearchParams={gameSearchParams} />
      </GridItem>
    </Grid>
  );
}

export default App;
