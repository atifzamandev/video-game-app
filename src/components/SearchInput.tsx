import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import useSearchQueryParams from '../store'

const SearchInput = () => {
  const searchRef = useRef<HTMLInputElement>(null)
  const setSearchText = useSearchQueryParams((state) => state.setSearchText)
  const navigate = useNavigate()

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (searchRef.current) {
          searchRef.current && setSearchText(searchRef.current.value)
          navigate('/')
        }
      }}
    >
      <InputGroup px={1}>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={searchRef}
          borderRadius={20}
          placeholder='Search...'
          variant='filled'
        />
      </InputGroup>
    </form>
  )
}

export default SearchInput
