import axios from "axios"
import { useCallback, useEffect, useState } from "react"

export const GetResponse = () => {
    const [apires, setRes] = useState([])
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/trending/movie/week?", {
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

export const GetMovieById = (id) => {
    const [apires, setRes] = useState([])
    const [movieId] = useState(id)
    const getData = useCallback(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?`, {
            params: {
                api_key: "67ac196cc193e3f56a1e35123a2a8df8"
            }
        })
            .then(res => {
                setRes(res)
            })
    }, [movieId])

    useEffect(() => {
        getData()
    }, [getData]);

    return (
        apires
    )
}

export const GetMovieCredits = (id) => {
    const [apires, setRes] = useState([])
    const [movieId] = useState(id)
    const getData = useCallback(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?`, {
            params: {
                api_key: "67ac196cc193e3f56a1e35123a2a8df8"
            }
        })
            .then(res => {
                setRes(res.data)
            })
    }, [movieId])

    useEffect(() => {
        getData()
    }, [getData]);

    return (
        apires
    )
}

export const GetMovieReviews = (id) => {
    const [apires, setRes] = useState([])
    const [movieId] = useState(id)
    const getData = useCallback(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?`, {
            params: {
                api_key: "67ac196cc193e3f56a1e35123a2a8df8"
            }
        })
            .then(res => {
                setRes(res.data)
            })
    }, [movieId])

    useEffect(() => {
        getData()
    }, [getData]);

    return (
        apires
    )
}

// export const GetMovieBySearch = (searchName) => {
//     const [apires, setRes] = useState([])
//     const [search] = useState(searchName)
//     const getData = useCallback(() => {
//         if (!search) return
//         axios.get(`https://api.themoviedb.org/3/search/movie?`, {
//             params: {
//                 api_key: "67ac196cc193e3f56a1e35123a2a8df8",
//                 query: search
//             }
//         })
//             .then(res => {
//                 setRes(res.data)
//             })
//     }, [search])

//     useEffect(() => {
//         getData()
//     }, [getData]);

//     return (
//         apires
//     )
// }