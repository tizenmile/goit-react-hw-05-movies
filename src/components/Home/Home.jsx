
import { GetResponse } from "components/api";
import { Link } from "react-router-dom";

export const Home = () => {
    const apires = GetResponse()
    if (apires.length === 0) return
    const movies = apires.data.results
    return (
        <div>
            <ul>
                {movies.map(el =>
                    <li key={el.id}>
                        <Link to={`goit-react-hw-05-movies/movies/${el.id}`}>
                            <p>{el.title ? el.title : el.name}</p>
                        </Link>
                    </li>)}
            </ul>
        </div>
    )
}