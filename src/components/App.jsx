import { lazy, Suspense } from "react";
import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import { Routes, Route, NavLink } from "react-router-dom";
import css from './App.module.css'

const Home = lazy(() => import("./Home/Home"));
const MovieDetails = lazy(() => import("components/MovieDetails/MovieDetails"));
const Movies = lazy(() => import("components/pages/Movies"));
const Cast = lazy(() => import("components/Cast/Cast"));
const Reviews = lazy(() => import("components/Reviews/Reviews"));
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
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <Routes>
            <Route path="/goit-react-hw-05-movies" element={<Home title="Tranding today" response={GetResponse} />} />
            <Route path="/goit-react-hw-05-movies/movies" element={<Movies />} />
            <Route path="/goit-react-hw-05-movies/movies/:movieId" element={<MovieDetails GetMovieById={GetMovieById} />} >
              <Route path="cast" element={<Cast GetMovieCredits={GetMovieCredits} />} />
              <Route path="reviews" element={<Reviews GetMovieReviews={GetMovieReviews} />} />
            </Route>
            <Route path="*" element={<Home title="Tranding today" response={GetResponse}  />} />
          </Routes>
        </div>
      </Suspense>
    </div>
  );
};
