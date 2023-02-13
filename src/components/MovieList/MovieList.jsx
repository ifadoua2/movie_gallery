import React, { useEffect, useState } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";
import movieApiService from "../../apiServices/movieApiService.js";
import ClipLoader from "react-spinners/ClipLoader";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterVal, setFilterVal] = useState("");
  const [showMovies, setShowMovies] = useState([]);

  useEffect(() => {
    movieApiService.getAllMovies().then((data) => {
      setIsLoading(false);
      setMovies(data.reverse());
      setShowMovies([...data]);
    });
  }, []);

  const deleteById = (id) => {
    movieApiService.deleteMovieById(id).then((data) => {
      setMovies(movies.filter((movie) => movie.id != id));
      setShowMovies([...movies]);
    });
  };

  const handleFilterChange = (e) => {
    setFilterVal(e.target.value);
    setShowMovies(
      movies.filter((movie) =>
        movie.title.toUpperCase().includes(e.target.value.toUpperCase())
      )
    );
  };

  return (
    <div className={styles.movieListContainer}>
      <label htmlFor="inputFilter">Filter</label>
      <input
        type="text"
        className={styles.inputFilter}
        onChange={handleFilterChange}
        value={filterVal}
        id="inputFilter"
      />
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
            {showMovies.map((movie) => (
              <MovieCard
                movieProp={movie}
                key={movie.id}
                deleteById={deleteById}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};
