import axios from "axios";

const movieApiService = {
  getAllMovies() {
    return axios
      .get("https://63dbb6b2c45e08a0434c15f9.mockapi.io/v1/movies")
      .then((response) => response.data);
  },
};

export default movieApiService;
