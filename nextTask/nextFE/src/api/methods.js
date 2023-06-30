import { axiosGet } from "./client";

export const getMovies = () => {
  return axiosGet("/movies/");
};
