import React, { useEffect, useState } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";
import movieApiService from "../../apiServices/movieApiService.js";
import ClipLoader from "react-spinners/ClipLoader";

//=============Imports para el TOAST===========================

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

//=================Codigo UI ======================

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterVal, setFilterVal] = useState("");
  const [showMovies, setShowMovies] = useState([]);
  const [isToastDeleteOpen, setIsToastDeleteOpen] = useState(false);

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
      setIsToastDeleteOpen(true);
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
  const handleToastClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsToastDeleteOpen(false);
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
      <Snackbar
        open={isToastDeleteOpen}
        autoHideDuration={10000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={handleToastClose}
      >
        <Alert
          onClose={handleToastClose}
          severity="info"
          sx={{ width: "100%" }}
        >
          Pelicula correctamente eliminada!
        </Alert>
      </Snackbar>
    </div>
  );
};
