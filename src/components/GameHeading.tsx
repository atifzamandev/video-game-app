import { Heading } from "@chakra-ui/react";
import { GameSearchParams } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameSearchParams: GameSearchParams;
}

const GameHeading = ({ gameSearchParams }: Props) => {
  const genre = useGenre(gameSearchParams.genreId);

  const platform = usePlatform(gameSearchParams.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" my={4} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
