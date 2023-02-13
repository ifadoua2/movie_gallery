import React, { useEffect, useState } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";
import movieApiService from "../../apiServices/movieApiService.js";
import ClipLoader from "react-spinners/ClipLoader";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    movieApiService.getAllMovies().then((data) => {
      setIsLoading(false);
      setMovies(data.reverse());
    });
  }, []);

  const deleteById = (id) => {
    movieApiService.deleteMovieById(id).then((data) => {
      setMovies(movies.filter((movie) => movie.id != id));
    });
  };

  return (
    <div className={styles.gallery}>
      {isLoading ? (
        <ClipLoader
          className={styles.clipLoader}
          loading={isLoading}
          size={300}
          color={"red"}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>
          {movies.map((movie) => (
            <MovieCard
              movieProp={movie}
              key={movie.id}
              deleteById={deleteById}
            />
          ))}
        </>
      )}
    </div>
  );
};
