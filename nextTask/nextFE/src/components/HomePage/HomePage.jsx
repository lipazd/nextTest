import { useEffect, useState } from "react";
import { useGetMovies } from "../../api/hooks/useGetMovies";
import Card from "../Card/Card";
import MovieModal from "../MovieModal/MovieModal";
import * as S from "./HomePage.style";
import LoadingSpinner from "../common/LoadingSpinner/LoadingSpinner";
import { useInfinityScroll } from "../../hooks/useInfinityScroll";
import Search from "../common/Search/Search";
import { useDebounce } from "../../hooks/useDebounce";

const HomePage = () => {
  const [openModalId, setOpenModalId] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [dataToShow, setDataToShow] = useState([]);

  const { isLoading, data } = useGetMovies();
  const debounceValue = useDebounce(searchValue);
  const { isSpinnerShown, displayedMovies } = useInfinityScroll(dataToShow);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);
  };

  useEffect(() => {
    setDataToShow(data);
  }, [data]);

  useEffect(() => {
    const filteredData = data?.filter((card) =>
      card.title.includes(debounceValue)
    );
    setDataToShow(filteredData);
  }, [debounceValue]);

  return (
    <>
      {openModalId !== null && (
        <MovieModal
          handleCloseModal={() => setOpenModalId(null)}
          data={dataToShow.find((card) => card.id === openModalId)}
        />
      )}
      <S.HomePageContainer>
        <S.HomePageTitle>Explore your next Movies and tv shows</S.HomePageTitle>
        <Search value={searchValue} handleChange={handleChange} />
        <S.CardsContainer>
          {displayedMovies?.map((item) => (
            <Card
              key={item.id}
              handleReadMoreClick={(id) => setOpenModalId(id)}
              image={item.image}
              title={item.title}
              released={item.released}
              rating={item.rating}
              id={item.id}
            />
          ))}
          {(isLoading || isSpinnerShown) && <LoadingSpinner />}
        </S.CardsContainer>
      </S.HomePageContainer>
    </>
  );
};
export default HomePage;
