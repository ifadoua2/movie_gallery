import React, { useEffect, useState } from "react";
import { Movie } from "../../model/Movie";
import { MovieCard } from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";
import movieApiService from "../../apiServices/movieApiService.js";
import ClipLoader from "react-spinners/ClipLoader";
import { red } from "@mui/material/colors";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    movieApiService.getAllMovies().then((data) => {
      // setIsLoading(false);
      setMovies(data);
    });
  }, []);

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
            <MovieCard movieProp={movie} />
          ))}
        </>
      )}
    </div>
  );
};
