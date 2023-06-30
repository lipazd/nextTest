import { useQuery } from "react-query";
import { getMovies } from "../methods";

export const GET_MOVIES_KEY = "getMovies";

export const useGetMovies = () => {
  const { data, isError, isLoading, isFetching } = useQuery(
    [GET_MOVIES_KEY],
    () => getMovies()
  );

  return {
    data,
    isError,
    isLoading,
    isFetching,
  };
};
