import { GetMovieCredits } from "components/api";
import { useParams } from "react-router-dom";
export const Cast = () => {
    const { movieId } = useParams();
    const credits = GetMovieCredits(movieId);
    if (credits.length === 0) return
    return (
        <div>
            <ul>
                {credits.cast.length === 0 ? <p>now cast</p> : credits.cast.map(item => <li key={item.id}>
                    <img src={'https://image.tmdb.org/t/p/w500/' + item.profile_path} alt={item.name} />
                    <p>{item.name}</p>
                    <p>Character: {item.character}</p>
                </li>)}
            </ul>
        </div>
    )
}