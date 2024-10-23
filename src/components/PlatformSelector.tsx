import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";

interface PlatformSelectorProps {
  onSelectPlatfrom: (platform: Platform) => void;
  selectedPlatformId?: number;
}
const PlatformSelector = ({
  onSelectPlatfrom,
  selectedPlatformId,
}: PlatformSelectorProps) => {
  const { data: selectedPlatforms, isLoading, error } = usePlatforms();

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
            onClick={() => onSelectPlatfrom(platform)}
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
