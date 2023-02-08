import React, { useState } from "react";
import styles from "./MovieForm.module.css";

const moviePlantilla = {
  img: "https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg",
  title: "Película",
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

  return (
    <div>
      <form>
        <div>
          <img
            className={styles.moviePoster}
            src={newMovie.img}
            alt="movie poster"
          />
        </div>
        <section className={styles.movieForm}>
          <input
            value={newMovie.title}
            onChange={handleOnChange}
            name="movieTitle"
            type="text"
            placeholder="Título de la película ..."
          />
          {
            /*         <input
            value={newMovie.year}
            onChange={handleOnChange}
            name="movieYear"
            type="text"
            placeholder="Año de estreno ..."
          />
          <input
            value={newMovie.director}
            onChange={handleOnChange}
            name="movieDirector"
            type="text"
            placeholder="Director de la película ..."
          />
          <textarea
            value={newMovie.sinopsis}
            onChange={handleOnChange}
            name="movieSinopsis"
            type="area"
            placeholder="De qué va ..."
          />*/
            <textarea
              value={newMovie.img}
              onChange={handleOnChange}
              name="moviePoster"
              type="area"
              placeholder="url de la imagen ..."
            />
          }
          <button type="submit">Add</button>
        </section>
      </form>
    </div>
  );
}

export default MovieForm;
