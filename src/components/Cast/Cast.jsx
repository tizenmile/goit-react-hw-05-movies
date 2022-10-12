
import { useParams } from "react-router-dom";
import css from './Cast.module.css'
import PropTypes from 'prop-types';
export const Cast = ({ GetMovieCredits }) => {
    const { movieId } = useParams();
    const credits = GetMovieCredits(movieId);
    if (credits.length === 0) return
    return (
        <div>
            <ul className={css.list}>
                {credits.cast.length === 0 ? <p>now cast</p> : credits.cast.map(item => <li className={css.listCast} key={item.id}>
                    <img className={css.castImg} src={'https://image.tmdb.org/t/p/w500/' + item.profile_path} alt={item.name} />
                    <p>{item.name}</p>
                    <p>Character: {item.character}</p>
                </li>)}
            </ul>
        </div>
    )
}

Cast.propTypes = {
    GetMovieCredits: PropTypes.func,
}