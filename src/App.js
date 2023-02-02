import "./App.css";
import { MovieCard } from "./components/MovieCard/MovieCard";
import { Movie } from "./model/Movie";
import { MovieList } from "./components/MovieList/MovieList";

function App() {
  return (
    <div className="App">
      {/*     <MovieCard movieProp={new Movie('1', 'Zoy un titulo', 'Zoy un un director', '2023', '')} />
       */}
      <MovieList />
    </div>
  );
}

export default App;
