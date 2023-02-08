import React, { useState } from "react";
import movieApiService from "../../apiServices/movieApiService";
import styles from "./MovieForm.module.css";

const moviePlantilla = {
  img: "https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg",
  title: "default title",
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

  //he cambiado value por defaultValue en todos los inputs
  //he cambiado el name de todos los inputs para que coincidan con los elementos del objeto
  //si se borra la url de la imagen del formulario desaparecen los inputs
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <img
            className={styles.moviePoster}
            src={newMovie.img}
            alt="movie poster"
          />
        </div>
        <section className={styles.movieForm}>
          <input
            defaultValue={newMovie.title}
            onChange={handleOnChange}
            name="title"
            type="text"
            placeholder="Título de la película ..."
          />
          <input
            defaultValue={newMovie.year}
            onChange={handleOnChange}
            name="year"
            type="text"
            placeholder="Año de estreno ..."
          />
          <input
            defaultValue={newMovie.director}
            onChange={handleOnChange}
            name="director"
            type="text"
            placeholder="Director de la película ..."
          />
          <textarea
            defaultValue={newMovie.sinopsis}
            onChange={handleOnChange}
            name="sinopsis"
            type="area"
            placeholder="De qué va ..."
          />

          <textarea
            defaultValue={newMovie.img}
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
