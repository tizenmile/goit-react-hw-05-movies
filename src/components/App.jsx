import { Routes, Route, NavLink } from "react-router-dom";
import { Home } from "./Home/Home";
import { MovieDetails } from "components/MovieDetails/MovieDetails";
import { Movies } from "components/pages/Movies";
import { Cast } from "components/Cast/Cast";
import { Reviews } from "components/Reviews/Reviews";
export const App = () => {
  return (
    <div>
      <div>
        <nav>
          <NavLink to="/goit-react-hw-05-movies">Home</NavLink>
          <NavLink to="/goit-react-hw-05-movies/movies">Movie</NavLink>
        </nav>
      </div>
      <div>
        <Routes>
          <Route path="/goit-react-hw-05-movies" element={<Home />} />
          <Route path="/goit-react-hw-05-movies/movies" element={<Movies />} />
          <Route path="/goit-react-hw-05-movies/movies/:movieId" element={<MovieDetails />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};
