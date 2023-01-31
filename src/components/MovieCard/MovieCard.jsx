import React, { useState } from "react";
import { Movie } from "../../model/Movie";

/**
 *
 * @param {*} param0
 * @returns
 */
export const MovieCard = ({ movieProp }) => {
  const [movie, setMovie] = useState(movieProp);

  return (
    <div>
      <div>
        {/* <icono estrella> */}
        <img src={movie.img} alt="movie poster" />
      </div>
      <div>
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
        <div>
          <i>icon</i>
          <i>icon</i>
        </div>
      </div>
    </div>
  );
};
