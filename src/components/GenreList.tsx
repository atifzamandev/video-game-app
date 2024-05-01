import {
  Center,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCropedImageUrl from "../services/image-url";

const GenreList = () => {
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
                <Text fontSize='lg'>{genre.name}</Text>
              </HStack>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default GenreList;
