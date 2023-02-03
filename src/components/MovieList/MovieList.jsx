import React, { useEffect, useState } from "react";
import { Movie } from "../../model/Movie";
import { MovieCard } from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://63dbb6b2c45e08a0434c15f9.mockapi.io/v1/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className={styles.gallery}>
      {movies.map((movie) => (
        <MovieCard movieProp={movie} />
      ))}
    </div>
  );
};
