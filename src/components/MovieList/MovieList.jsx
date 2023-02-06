import React, { useEffect, useState } from "react";
import { Movie } from "../../model/Movie";
import { MovieCard } from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";
import movieApiService from "../../apiServices/movieApiService.js";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieApiService.getAllMovies().then((data) => setMovies(data));
  }, []);

  return (
    <div className={styles.gallery}>
      {movies.map((movie) => (
        <MovieCard movieProp={movie} />
      ))}
    </div>
  );
};
