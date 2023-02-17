import axios from "axios";

const baseUrl = "https://63dbb6b2c45e08a0434c15f9.mockapi.io/v1/movies";

const movieApiService = {
  getAllMovies() {
    return axios.get(baseUrl).then((response) => response.data);
  },
  getAllFavourites() {
    return axios
      .get(baseUrl + "?isFavourite=true")
      .then((response) => response.data);
  },

  getMovieById(id) {
    return axios.get(baseUrl + `/${id}`).then((response) => response.data);
  },
  editMovieById(id, changes) {
    return axios
      .put(baseUrl + `/${id}`, changes)
      .then((response) => response.data);
  },

  deleteMovieById(id) {
    return axios.delete(baseUrl + `/${id}`).then((response) => response.data);
  },

  addMovie(data) {
    return axios
      .post(baseUrl, data)
      .then((response) => response.data)
      .catch((err) => console.log(err));
  },
};

export default movieApiService;
