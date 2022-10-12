import { useParams, Link, Outlet } from "react-router-dom";
import { GetMovieById } from "components/api";
import css from './MovieDetails.module.css'


export const MovieDetails = () => {
    const { movieId } = useParams();
    const movie = GetMovieById(movieId);

    if (movie.length === 0) return
    return (
        <div>
            <div className={css.main}>
                <img src={'https://image.tmdb.org/t/p/w500/' + movie.data.poster_path} alt="" />
                <div className={css.overview}>
                    <h2>
                        {movie.data.original_title}
                    </h2>
                    <p>User Score: {movie.data.vote_average}
                    </p>
                    <h2>Overview</h2>
                    <p>{movie.data.overview}</p>
                    <h2>Genres</h2>
                    <p>{movie.data.genres.map(el => el.name).join(", ")}</p>
                </div>

            </div>
            <div>
                <p>Addition Information</p>
                <ul>
                    <li>
                        <Link to={"cast"}>
                            Cast
                        </Link>
                    </li>
                    <li>
                        <Link to={'reviews'}>
                            Reviews
                        </Link>
                    </li>
                </ul>
                <Outlet />
            </div>
        </div>
    );
};