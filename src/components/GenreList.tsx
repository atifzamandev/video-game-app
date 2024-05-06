import {
  Button,
  Center,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCropedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading)
    return (
      <Center>
        <Spinner />
      </Center>
    );
  return (
    <>
      <List>
        {isLoading && <p>Loading...</p>}
        {!isLoading &&
          data.map((genre) => (
            <ListItem key={genre.id} paddingY='5px'>
              <HStack>
                <Image
                  boxSize='32px'
                  borderRadius={8}
                  src={getCropedImageUrl(genre.image_background)}
                />
                <Button
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                  onClick={() => onSelectGenre(genre)}
                  fontSize='lg'
                  variant='link'
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default GenreList;
