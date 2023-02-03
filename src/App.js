import "./App.css";
import { MovieCard } from "./components/MovieCard/MovieCard";
import { Movie } from "./model/Movie";
import { MovieList } from "./components/MovieList/MovieList";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <MovieList />
    </div>
  );
}

export default App;
