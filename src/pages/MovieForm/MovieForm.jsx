import React, { useState } from "react";
import movieApiService from "../../apiServices/movieApiService";
import styles from "./MovieForm.module.css";

const moviePlantilla = {
  img: "https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg",
  title: "",
  year: "",
  director: "",
  isFavourite: false,
  sinopsis: "",
};

function MovieForm() {
  const [newMovie, setNewMovie] = useState(moviePlantilla);

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const temp = (newMovie[name] = value);
    setNewMovie({ ...newMovie, temp });
    console.log(newMovie);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    movieApiService.addMovie(newMovie);
  };

  //he cambiado el name de todos los inputs para que coincidan con los elementos del objeto
  return (
    <div className={styles.pageContainer}>
      <form className={styles.MovieFormContainer} onSubmit={handleSubmit}>
        <div className={styles.contenedorImagen}>
          <img
            className={styles.moviePoster}
            src={newMovie.img}
            alt="movie poster"
          />
        </div>
        <section className={styles.movieForm}>
          <div className={styles.inputTitleYearContainer}>
            <div>
              <label>Título</label>
              <input
                value={newMovie.title}
                onChange={handleOnChange}
                name="title"
                type="text"
                placeholder="Título de la película ..."
              />
            </div>
            <div>
              <label>Año</label>
              <input
                value={newMovie.year}
                onChange={handleOnChange}
                name="year"
                type="text"
                placeholder="Año de estreno ..."
              />
            </div>
          </div>
          <label>Director</label>
          <input
            value={newMovie.director}
            onChange={handleOnChange}
            name="director"
            type="text"
            placeholder="Director de la película ..."
          />
          <label>Sinopsis</label>
          <textarea
            className={styles.inputSinopsis}
            value={newMovie.sinopsis}
            onChange={handleOnChange}
            name="sinopsis"
            type="area"
            placeholder="De qué va ..."
          />
          <label>Carátula</label>
          <textarea
            value={newMovie.img}
            onChange={handleOnChange}
            name="img"
            type="area"
            placeholder="url de la imagen ..."
          />
          <button type="submit">Add</button>
        </section>
      </form>
    </div>
  );
}

export default MovieForm;
