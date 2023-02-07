import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css";
import movieApiService from "../../apiServices/movieApiService.js";
import { AiFillStar } from "react-icons/ai";

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();

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

  useEffect(() => {
    movieApiService.getMovieById(id).then((data) => setMovie(data));
  }, []);

  return (
    <div>
      {movie === undefined ? (
        ""
      ) : (
        <div className={styles.detailsContainer}>
          <div className={styles.contenedorImagen}>
            <img src={movie.img} alt={movie.title} />
          </div>
          <div className={styles.contenedorDatosCortos}>
            <div className={styles.contenedorFavoritos}>
              <h3 className={styles.tituloDatos}>Favorito</h3>
              <AiFillStar
                onClick={toogleIsFavourite}
                className={`${styles.iconFavourite} ${
                  movie.isFavourite ? styles.iconFavouriteActive : ""
                }`}
              />
            </div>

            <div>
              <h3 className={styles.tituloDatos}>Titulo</h3>
              <p>{movie.title}</p>
            </div>
            <div>
              <h3 className={styles.tituloDatos}>Director</h3>
              <p>{movie.director}</p>
            </div>
            <div>
              <h3 className={styles.tituloDatos}>Año</h3>
              <p>{movie.year}</p>
            </div>
            <div className={styles.contenedorSinopsis}>
              <h3 className={styles.tituloDatos}>Sinopsis</h3>
              <p>{movie.sinopsis}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

//https://www.imdb.com/find/?q=
