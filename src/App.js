import "./App.css";
import { MovieCard } from "./components/MovieCard/MovieCard";
import { Movie } from "./model/Movie";
import { MovieList } from "./components/MovieList/MovieList";
import { Navbar } from "./components/Navbar/Navbar";
import { MovieDetails } from "./pages/MovieDetails/MovieDetails";
import MovieForm from "./pages/MovieForm/MovieForm";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>

      <Routes>
        <Route element={<MovieList />} path="/" />
        <Route element={<MovieDetails />} path="/:id" />
        <Route element={<MovieForm />} path="/form" />
      </Routes>
    </div>
  );
}

export default App;
