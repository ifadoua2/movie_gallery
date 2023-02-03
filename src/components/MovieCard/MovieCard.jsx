import React, { useState } from "react";

import { Movie } from "../../model/Movie";
import {
  AiFillAlert,
  AiFillEdit,
  AiOutlineDelete,
  AiFillStar,
} from "react-icons/ai";
import styles from "./MovieCard.module.css";

/**
 *
 * @param {*} param0
 * @returns
 */
export const MovieCard = ({ movieProp, editById, deleteById }) => {
  const [movie, setMovie] = useState(movieProp);

  const toogleIsFavourite = () => {
    movie.isFavourite = !movie.isFavourite;
    setMovie({ ...movie });
  };

  return (
    <li className={styles.movie}>
      <div>
        <AiFillStar
          onClick={toogleIsFavourite}
          className={`${styles.iconFavourite} ${
            movie.isFavourite ? styles.iconFavouriteActive : ""
          }`}
        />
        <img
          className={styles.moviePosterImage}
          src={
            /* movie.img */ "https://m.media-amazon.com/images/M/MV5BNzU4NWEwNDItMzMzYy00ZDYyLWIxZjMtMDlkYWVjNjQwYzBjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg"
          }
          alt="movie poster"
        />
      </div>
      <div className={styles.movieTitles}>
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
        <div>
          <AiFillEdit onClick={() => editById(movie.id)} />
          {/*edit icon*/}
          <AiOutlineDelete onClick={() => deleteById(movie.id)} />
          {/*del icon*/}
        </div>
      </div>
    </li>
  );
};
