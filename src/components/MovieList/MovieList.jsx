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
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");

  /* 
  Voy a intentar explicar como he arreglado el confirm...
  primera pregunta, ¿donde ponemos el confirm, en la list on la card?
  - si lo ponemos en la list, necesitaremos que la card nos pase 2 cosas, 
  que el usuario ha clickado en el icono de delete y la id de la movie 
  que posiblemente queremos eliminar
  - si lo ponemos en la card ya tenemos esas dos informaciones
  - PERO... si lo ponemos en la list estar¡mos creando un componente por galeria, 
  mientras que si lo creamos en movie card, estamos creando un dialog por moviecard,
  asi que si tenemos 20 movies ya serian 20 dialogs... esto es muuuuu malo, no tardaria
  en ralentizar la pagina y no queremos eso
  - por este motivo es que tiene mas sentido que este en la lista.

  segunda pregunta: ok, lo dejamos en la lista pero, ¿como le pasamos las 2 informaciones 
  que necesitamos?
  - en vez de pasarle a la card el deleteById para que elimine la pelicula, creamos una 
  funcion intermedia aqui en la lista, que se encargara de 1, mostrar el dialog y 2, 
  recibir el id que posiblemente queremos borrar, y guardarermos este id en un estado

  en el render nos aseguramos de un cosas:
  - que al clickar los botones, pasemos nosotros un valor como param, ( TT.TT sry, 
    la opcion no era automatica, teniamos que darselo nosotros....)
  - ponemos el autofocus en el boton de no, asi si el usuario pulsa enter nada mas 
    aparezca el modal, la opcion por defecto es no.
  
  al cerrarse el dialog lanza la funcion handleDialogClose, y aqui empezamos con una
  salvaguarda, si la opcion recibida no es 'YES' o 'NO', no hacer nada para evitar 
  que se cierre el modal al clickar fuera del dialogo o al pulsar esc, vamos a forzar 
  al usuario a mojarse, o si o no
  Lo siguiente que nos preguntamos es, recibimos la option 'YES', pues borramos la 
  movie usando la funcion deleteByID, que sigue estando en la lista y que ya no pasamos
  a l card, pasandole el id que habiamos guardado en el estado idToDelete
  Para finalizar, elija Yes o No, reseteamos el estado de idToDelete a '', ya no 
  queremos borrar nada, y ocultamos el dialog de nuevo.
  
  Y este es el ejemplo de lo que pasa si madrugais demasiado y no sabeis que hacer 
  mientras esperais la hora para pillar el tren...
  */

  useEffect(() => {
    movieApiService.getAllMovies().then((data) => {
      setIsLoading(false);
      setMovies(data);
    });
  }, []);

  const deleteById = (id) => {
    movieApiService.deleteMovieById(id).then((data) => {
      setMovies(movies.filter((movie) => movie.id !== id));
    });
  };
  const openConfirmDialog = (id) => {
    setIsConfirmDialogOpen(true);
    setIdToDelete(id);
  };

  const handleDialogClose = (option) => {
    if (option !== "YES" && option !== "NO") return;
    if (option === "YES") deleteById(idToDelete);

    setIdToDelete("");
    setIsConfirmDialogOpen(false);
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
              openConfirmDialog={openConfirmDialog}
            />
          ))}
        </>
      )}
      <Dialog
        open={isConfirmDialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this movie?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action will defenitely remove the movie. Do you want to
            continue?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDialogClose("NO")} autoFocus>
            NO
          </Button>
          <Button onClick={() => handleDialogClose("YES")}>YES</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
