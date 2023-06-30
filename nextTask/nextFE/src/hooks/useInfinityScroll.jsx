import { useEffect, useState } from "react";

const MOVIES_PER_PAGE = 20;

export const useInfinityScroll = (data) => {  
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [isSpinnerShown, setIsSpinnerShown] = useState(false);
  useEffect(() => {
    if (data) {
      setDisplayedMovies([])
      loadMoreMovies(true);
    }
  }, [data]);

  const onScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    setIsSpinnerShown(true);
    if (scrollTop + clientHeight >= scrollHeight) {
      loadMoreMovies();
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [displayedMovies]);

  const loadMoreMovies = (isFirstTime) => {
    const startIndex = isFirstTime ? 0 : displayedMovies.length;
    const endIndex = startIndex + MOVIES_PER_PAGE;
    const nextMovies = data?.slice(startIndex, endIndex);
    setDisplayedMovies((prevMovies) => [...prevMovies, ...nextMovies]);
    setIsSpinnerShown(false);
  };
  return {
    isSpinnerShown,
    displayedMovies,
  };
};
