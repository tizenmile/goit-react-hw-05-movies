import css from './Movies.module.css'
import axios from "axios"
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [apires, setRes] = useState([])

    const getData = useCallback(() => {
        if (!searchParams.get("name")) return
        axios.get(`https://api.themoviedb.org/3/search/movie?`, {
            params: {
                api_key: "67ac196cc193e3f56a1e35123a2a8df8",
                query: searchParams.get("name")
            }
        })
            .then(res => {
                setRes(res.data)
            })
    }, [searchParams])

    useEffect(() => {
        getData()
    }, [getData]);

    return (
        <div>
            <div className={css.search}>
                <form onSubmit={e => {
                    e.preventDefault()
                    setSearchParams({ name: e.target.search.value })
                }}>
                    <label>
                        <input name="search" />
                    </label>
                    <button >submit</button>
                </form>
            </div>
            <div>
                <ul>
                    {apires.length !== 0 && apires.results.map(item => <li key={item.id}>
                        <Link to={`${item.id}`}>
                            <p>{item.title ? item.title : item.name}</p>
                        </Link>
                    </li>)}
                </ul>
            </div>
        </div>
    )
}
export default Movies