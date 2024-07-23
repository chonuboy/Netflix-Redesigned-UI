import React, { useEffect, useState } from 'react'
import "./banner.css"
import requests from "../../../../API/request"
import axios from '../../../../API/axios';

const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[Math.floor((Math.random()) * request.data.results.length - 1)]
            )
            return request;
        }
        fetch();
    }, [])

    const short = function (str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className='Banner'
            style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, backgroundSize: "cover", backgroundPosition: "center center" }}>
            <div className='Banner__contents'>
                <h1 className='Banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className='Banner__btns'>
                    <button className='Banner__btn Banner__playbtn'>Play</button>
                    <button className='Banner__btn Banner__listbtn'>My List</button>
                </div>
                <h2 className='Banner__desc'>{short(movie?.overview, 150)}</h2>
            </div>
            <div className='Banner__btm'></div>
        </header>
    )
}

export default Banner