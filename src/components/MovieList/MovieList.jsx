import React, { useEffect, useState } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";
import movieApiService from "../../apiServices/movieApiService.js";
import ClipLoader from "react-spinners/ClipLoader";
import { AiFillStar } from "react-icons/ai";

//=============Imports para el TOAST===========================

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useNavigate } from "react-router";

//=============Imports para el dialog===========================

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

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
  const navigator = useNavigate();

  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [optionConfirm, setOptionConfirm] = useState(false);

  useEffect(() => {
    getMoviesState();
  }, []);

  const getMoviesState = () => {
    movieApiService.getAllMovies().then((data) => {
      setIsLoading(false);
      setMovies(data.reverse());
      setShowMovies([...data]);
    });
  };

  const deleteById = (id) => {
    setOpenConfirmDialog(true);
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
  const handleFilterFavClick = (e) => {
    navigator("/fav");
  };
  const handleToastClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsToastDeleteOpen(false);
  };
  const handleDialogClose = (option) => {
    if (option === "YES") {
      setOptionConfirm(true);
    }
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
      <AiFillStar
        onClick={handleFilterFavClick}
        className={`${styles.filterFavIcon}`}
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
                getMoviesState={getMoviesState}
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
      <Dialog
        open={openConfirmDialog}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this movie?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This acction will defenitly remove the movie.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>NO</Button>
          <Button onClick={handleDialogClose} autoFocus>
            YES
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
