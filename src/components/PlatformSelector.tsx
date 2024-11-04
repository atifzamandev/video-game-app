import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useSearchQueryParams from "../store";

const PlatformSelector = () => {
  const { data: selectedPlatforms, isLoading, error } = usePlatforms();
  const selectedPlatformId = useSearchQueryParams(
    (state) => state.gameQuery.platformId
  );
  const setSelectedPlatformId = useSearchQueryParams(
    (state) => state.setPlatfromId
  );
  //const selectedPlatform = selectedPlatforms.results.find(platform=>platform.id === selectedPlatformId)
  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;
  if (isLoading)
    return (
      <Menu>
        <Skeleton height="40px" width="122px" />
      </Menu>
    );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {selectedPlatforms?.results.map((platform) => (
          <MenuItem
            onClick={() => setSelectedPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
