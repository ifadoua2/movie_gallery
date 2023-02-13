import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { MovieDetails } from "./pages/MovieDetails/MovieDetails";
import { Gallery } from "./pages/Gallery/Gallery";
import MovieForm from "./pages/MovieForm/MovieForm";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>

      <Routes>
        <Route element={<Gallery />} path="/" />
        <Route element={<MovieDetails />} path="/:id" />
        <Route element={<MovieForm />} path="/form" />
      </Routes>
    </div>
  );
}

export default App;
