// import { GetMovieBySearch } from "components/api"
import axios from "axios"
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react"
export const Movies = () => {

    const [apires, setRes] = useState([])
    const [search, setSearch] = useState()

    const getData = useCallback(() => {
        if (!search) return
        axios.get(`https://api.themoviedb.org/3/search/movie?`, {
            params: {
                api_key: "67ac196cc193e3f56a1e35123a2a8df8",
                query: search
            }
        })
            .then(res => {
                setRes(res.data)
            })
    }, [search])

    useEffect(() => {
        getData()
    }, [getData]);

    return (
        <div>
            <div>
                <form onSubmit={e => {
                    e.preventDefault()
                    setSearch(e.target.search.value)
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