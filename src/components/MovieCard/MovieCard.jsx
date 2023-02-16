import React, { useState } from "react";

import { AiFillEdit, AiOutlineDelete, AiFillStar } from "react-icons/ai";
import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";
import movieApiService from "../../apiServices/movieApiService";

/**
 *
 * @param {*} param0
 * @returns
 */
export const MovieCard = ({ movieProp, editById, openConfirmDialog }) => {
  const [movie, setMovie] = useState(movieProp);

  const toogleIsFavourite = () => {
    movie.isFavourite = !movie.isFavourite;
    setMovie({ ...movie });
    movieApiService
      .editMovieById(movie.id, {
        isFavourite: movie.isFavourite,
      })
      .then((res) =>
        console.log(`Movie: ${movie.id} se ha actualizado correctamente`)
      );
  };

  return (
    <li className={styles.movie}>
      <AiFillStar
        onClick={toogleIsFavourite}
        className={`${styles.iconFavourite} ${
          movie.isFavourite ? styles.iconFavouriteActive : ""
        }`}
      />

      <div className={styles.imageContainer}>
        <Link to={movie.id}>
          <img
            className={styles.moviePosterImage}
            src={movie.img}
            alt="movie poster"
          />
        </Link>
      </div>
      <div className={styles.movieTitles}>
        <h3>{movie.title}</h3>
        <div className={styles.movieTitlesIcons}>
          <p>{movie.year}</p>
          <div className={styles.icons}>
            <AiFillEdit
              className={styles.iconEdit}
              onClick={() => editById(movie.id)}
            />
            {/*edit icon*/}
            <AiOutlineDelete
              className={styles.iconDelete}
              onClick={() => openConfirmDialog(movie.id)}
            />
            {/*del icon*/}
          </div>
        </div>
      </div>
    </li>
  );
};
