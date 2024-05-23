import { HStack, Image } from "@chakra-ui/react";
import headerLogo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText:string)=>void
}

const NavBar = ({onSearch}:Props) => {
  return (
    <HStack  padding='10px'>
      <Image src={headerLogo} boxSize='4rem' />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
