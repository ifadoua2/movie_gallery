import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css";
import movieApiService from "../../apiServices/movieApiService.js";

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    movieApiService.getMovieById(id).then((data) => setMovie(data));
  }, []);

  return (
    <div>
      {movie === undefined ? (
        ""
      ) : (
        <div className={styles.detailsContainer}>
          <img src={movie.img} alt={movie.title} />
          <div>{movie.title}</div>
          <div>{movie.director}</div>
          <div>{movie.year}</div>
          <div>{movie.sinopsis}</div>
        </div>
      )}
    </div>
  );
};

//https://www.imdb.com/find/?q=
