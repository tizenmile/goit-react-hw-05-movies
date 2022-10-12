import { Routes, Route, NavLink } from "react-router-dom";
import { Home } from "components/Home/Home";
import { MovieDetails } from "components/MovieDetails/MovieDetails";
import { Movies } from "components/pages/Movies";
import { Cast } from "components/Cast/Cast";
import { Reviews } from "components/Reviews/Reviews";
export const App = () => {
  return (
    <div>
      <div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movie</NavLink>
        </nav>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};
