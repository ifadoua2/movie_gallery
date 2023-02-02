import React, { useEffect, useState } from "react";
import { Movie } from "../../model/Movie";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    /*  setMovies(moviesDataBase); */
    fetch("https://63dbb6b2c45e08a0434c15f9.mockapi.io/v1/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <li>
          {movie.title}
          <img src={movie.img} alt={movie.title + "poster"}></img>
        </li>
      ))}
    </div>
  );
};
