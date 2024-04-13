import { HStack, Image } from "@chakra-ui/react";
import headerLogo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={headerLogo} boxSize='4rem' />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
