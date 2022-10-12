import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export const Home = ({ response }) => {
    const apires = response()
    if (apires.length === 0) return
    const movies = apires.data.results
    return (
        <div>
            <h1>Tranding today</h1>
            <ul>
                {movies.map(el =>
                    <li key={el.id}>
                        <Link to={`/goit-react-hw-05-movies/movies/${el.id}`}>
                            <p>{el.title ? el.title : el.name}</p>
                        </Link>
                    </li>)}
            </ul>
        </div>
    )
}
Home.propTypes = {
    response: PropTypes.func,
}