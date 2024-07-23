import "./row.css"
import React, { useEffect, useState } from 'react'
import axios from '../../../../API/axios';
import { useNavigate } from "react-router-dom";

const Row = ({ title, fetchUrl, isLarge = false }) => {

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchPics = async () => {
            const moviePics = await axios.get(fetchUrl);
            setMovies(moviePics.data.results);
        };
        fetchPics();
    }, [fetchUrl])
    const base_url = "https://image.tmdb.org/t/p/original/"
    const nav = useNavigate()
    const goTo = (pic) => {
        const encodedArray = encodeURIComponent(JSON.stringify(pic));
        nav(`/single-image?data=${encodedArray}`);
    }

    return (

        <div className="rows">
            <h1>{title}</h1>
            <div className="row__posters">
                {movies.map(pics => ((isLarge && pics.poster_path) || (!isLarge && pics.backdrop_path)) && (
                    <img className={`row_poster ${isLarge && "row_poster_large"}`} key={pics.id} src={`${base_url}${isLarge ? pics.poster_path : pics.backdrop_path}`} alt="Movies" onClick={() => { goTo(pics) }} />
                ))}
            </div>
            <h3 style={{ color: "grey", borderBottom: "1px grey solid" }}>Slide To View More...</h3>
        </div>
    )
}

export default Row;