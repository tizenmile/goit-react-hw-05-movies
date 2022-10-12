import { Routes, Route, NavLink } from "react-router-dom";
import { Home } from "./Home/Home";
import { MovieDetails } from "components/MovieDetails/MovieDetails";
import { Movies } from "components/pages/Movies";
import { Cast } from "components/Cast/Cast";
import { Reviews } from "components/Reviews/Reviews";
import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import css from './App.module.css'
export const App = () => {

  const GetResponse = () => {
    const [apires, setRes] = useState([])
    useEffect(() => {
      axios.get("https://api.themoviedb.org/3/trending/movie/day?", {
        params: {
          api_key: "67ac196cc193e3f56a1e35123a2a8df8"
        }
      })
        .then(res => {
          setRes(res)
        })
    }, [])
    return (
      apires
    )
  }

  const GetMovieById = (id) => {
    const [apires, setRes] = useState([])
    const getData = useCallback(() => {
      axios.get(`https://api.themoviedb.org/3/movie/${id}?`, {
        params: {
          api_key: "67ac196cc193e3f56a1e35123a2a8df8"
        }
      })
        .then(res => {
          setRes(res)
        })
    }, [id])

    useEffect(() => {
      getData()
    }, [getData]);

    return (
      apires
    )
  }

  const GetMovieCredits = (id) => {
    const [apires, setRes] = useState([])
    const getData = useCallback(() => {
      axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?`, {
        params: {
          api_key: "67ac196cc193e3f56a1e35123a2a8df8"
        }
      })
        .then(res => {
          setRes(res.data)
        })
    }, [id])

    useEffect(() => {
      getData()
    }, [getData]);

    return (
      apires
    )
  }

  const GetMovieReviews = (id) => {
    const [apires, setRes] = useState([])
    const getData = useCallback(() => {
      axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?`, {
        params: {
          api_key: "67ac196cc193e3f56a1e35123a2a8df8"
        }
      })
        .then(res => {
          setRes(res.data)
        })
    }, [id])

    useEffect(() => {
      getData()
    }, [getData]);

    return (
      apires
    )
  }
  return (
    <div>
      <div>
        <nav className={css.nav}>
          <NavLink className={css.nav} to="/goit-react-hw-05-movies">Home</NavLink>
          <NavLink className={css.nav} to="/goit-react-hw-05-movies/movies">Movie</NavLink>
        </nav>
      </div>
      <div>
        <Routes>
          <Route path="/goit-react-hw-05-movies" element={<Home title="Tranding today" response={GetResponse} />} />
          <Route path="/goit-react-hw-05-movies/movies" element={<Movies />} />
          <Route path="/goit-react-hw-05-movies/movies/:movieId" element={<MovieDetails GetMovieById={GetMovieById} />} >
            <Route path="cast" element={<Cast GetMovieCredits={GetMovieCredits} />} />
            <Route path="reviews" element={<Reviews GetMovieReviews={GetMovieReviews} />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};
