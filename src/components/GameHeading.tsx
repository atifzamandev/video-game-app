import { Heading } from "@chakra-ui/react";
import { GameSearchParams } from "../App";

interface Props {
  gameSearchParams: GameSearchParams;
}

const GameHeading = ({ gameSearchParams }: Props) => {
  const heading = `${gameSearchParams.platform?.name || ''} ${gameSearchParams.genre?.name || ''} Games`;
  return (
    <Heading as='h1' my={4} fontSize='5xl'>
      {heading}
    </Heading>
  );
};

export default GameHeading;
