import {
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Skeleton,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import usePlatform, { Platform } from "../hooks/usePlatform";

interface PlatformSelectorProps {
  onSelectPlatfrom: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
const PlatformSelector = ({
  onSelectPlatfrom,
  selectedPlatform,
}: PlatformSelectorProps) => {
  const { data, isLoading, error } = usePlatform();

  if (error) return null;
  if (isLoading)
    return (
      <Menu>
        <Skeleton height='40px' width='122px' ml='1rem' />
      </Menu>
    );
  return (
    <Menu>
      <MenuButton as={Button} ml='1rem' rightIcon={<FaChevronDown />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
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
