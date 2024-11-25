import { HStack, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import headerLogo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const NavBar = () => {
  return (
    <HStack padding='10px'>
      <Link to='/'>
        <Image src={headerLogo} boxSize='4rem' objectFit='cover' />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
