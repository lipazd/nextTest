import * as S from "./Search.style";

const Search = ({value,handleChange}) => {
  return (
    <S.SearchContainer>
      <S.SearchInput value={value} onChange={handleChange} placeholder="Search for movies"/>
    </S.SearchContainer>
  );
};

export default Search;
