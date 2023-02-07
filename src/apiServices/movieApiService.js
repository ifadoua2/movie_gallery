import axios from "axios";

const movieApiService = {
  getAllMovies() {
    return axios
      .get("https://63dbb6b2c45e08a0434c15f9.mockapi.io/v1/movies")
      .then((response) => response.data);
  },

  getMovieById(id) {
    return axios
      .get(`https://63dbb6b2c45e08a0434c15f9.mockapi.io/v1/movies/${id}`)
      .then((response) => response.data);
  },
  editMovieById(id, changes) {
    return axios
      .put(`https://63dbb6b2c45e08a0434c15f9.mockapi.io/v1/movies/${id}`, changes)
      .then((response) => response.data);
  }
};

export default movieApiService;
