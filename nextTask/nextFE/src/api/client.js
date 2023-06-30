import axios from "axios";

export const axiosGet = (endpoint) => {
  return axios
    .get(endpoint)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      throw error;
    });
};
