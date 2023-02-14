import React, { useEffect, useState } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";
import movieApiService from "../../apiServices/movieApiService.js";
import ClipLoader from "react-spinners/ClipLoader";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [optionConfirm, setOptionConfirm] = useState(false);
  useEffect(() => {
    movieApiService.getAllMovies().then((data) => {
      setIsLoading(false);
      setMovies(data);
    });
  }, []);

  const deleteById = (id) => {
    setOpenConfirmDialog(true);
    movieApiService.deleteMovieById(id).then((data) => {
      setMovies(movies.filter((movie) => movie.id != id));
    });
  };

  const handleDialogClose = (option) => {
    if (option === "YES") {
      setOptionConfirm(true);
    }
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
