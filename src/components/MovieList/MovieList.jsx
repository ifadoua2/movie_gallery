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
  const [isToastDeleteOpen, setIsToastDeleteOpen] = useState(false);


  useEffect(() => {
    movieApiService.getAllMovies().then((data) => {
      setIsLoading(false);
      setMovies(data);
    });
  }, []);

  const deleteById = (id) => {
    movieApiService.deleteMovieById(id).then((data) => {
      setMovies(movies.filter((movie) => movie.id !== id));
      setIsToastDeleteOpen(true);
    });
  };

  const handleToastClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsToastDeleteOpen(false);
  };

  return (
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
          {movies.map((movie) => (
            <MovieCard
              movieProp={movie}
              key={movie.id}
              deleteById={deleteById}
            />
          ))}
        </>
      )}

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
