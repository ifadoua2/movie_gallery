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
      .put(
        `https://63dbb6b2c45e08a0434c15f9.mockapi.io/v1/movies/${id}`,
        changes
      )
      .then((response) => response.data);
  },

  deleteMovieById(id) {
    return axios
      .delete(`https://63dbb6b2c45e08a0434c15f9.mockapi.io/v1/movies/${id}`)
      .then((response) => response.data);
  },

  addMovie(data) {
    return axios
      .post(`https://63dbb6b2c45e08a0434c15f9.mockapi.io/v1/movies/`, data)
      .then((response) => response.data)
      .catch((err) => console.log(err));
  },
};

export default movieApiService;
