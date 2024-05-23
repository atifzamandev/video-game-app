import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText:string)=>void
}

const SearchInput = ({onSearch}:Props) => {
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        searchRef.current && onSearch(searchRef.current.value);
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
  );
};

export default SearchInput;
