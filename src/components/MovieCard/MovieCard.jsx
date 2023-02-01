import React, { useState } from "react";
import { Movie } from "../../model/Movie";
import { AiFillAlert } from "react-icons/ai";
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
    <div>
      <div>
        <AiFillAlert
          onClick={toogleIsFavourite}
          className={`${styles.iconFavourite} ${
            movie.isFavourite ? styles.iconFavouriteActive : ""
          }`}
        />
        <img src={movie.img} alt="movie poster" />
      </div>
      <div>
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
        <div>
          <AiFillAlert onClick={() => editById(movie.id)} />
          {/*edit icon*/}
          <AiFillAlert onClick={() => deleteById(movie.id)} />
          {/*del icon*/}
        </div>
      </div>
    </div>
  );
};
