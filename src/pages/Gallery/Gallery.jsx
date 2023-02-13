import React, { useState } from "react";
import { MovieList } from "../../components/MovieList/MovieList";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export const Gallery = () => {
  const [isToastDeleteOpen, setIsToastDeleteOpen] = useState(false);

  return (
    <div>
    <MovieList
      isToastDeleteOpen={isToastDeleteOpen}
      setIsToastDeleteOpen={setIsToastDeleteOpen}
    />
    <Snackbar
    open={isToastDeleteOpen}
    autoHideDuration={10000}
    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    onClose={handleToastClose}
  >
    <Alert
      onClose={handleToastClose}
      severity="info"
      sx={{ width: "100%" }}
    >
      Pelicula correctamente eliminada!
    </Alert>
  </Snackbar></div>
  );
};
