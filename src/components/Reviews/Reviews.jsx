import { GetMovieReviews } from "components/api";
import { useParams } from "react-router-dom";

export const Reviews = () => {
    const { movieId } = useParams();
    const reviews = GetMovieReviews(movieId);
    if (reviews.length === 0) return
    return (
        <div>
            <ul>
                {reviews.results.length === 0 ? <p>no reviews here</p> : reviews.results.map(item => <li key={item.id}>
                    <h2>{item.author}</h2>
                    <p>{item.content}</p>
                </li>)}
            </ul>
        </div>
    )
}