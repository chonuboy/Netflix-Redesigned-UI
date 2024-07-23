import React from 'react';
import "./single.css";
import { useLocation } from 'react-router-dom';


const Single = () => {
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const encodedArray = queryParams.get('data');
  const myArray = encodedArray ? JSON.parse(decodeURIComponent(encodedArray)) : [];
  const base_url = "https://image.tmdb.org/t/p/original/"
  console.log(myArray);
  return (
    <div className='img-bg' style={{background:`url(${base_url}${myArray.backdrop_path?(myArray.backdrop_path):"black"})no-repeat`,backgroundSize:"cover",}}>
    <div className='single'>
        {[myArray].map(movie=>
          (movie.backdrop_path || movie.poster_path) && (
          <>
          <h1 key={movie.id+3}>Title : {movie.original_name || movie.original_title}</h1>
          <img src={`${base_url}${movie.poster_path ? (movie.poster_path):(movie.backdrop_path)}`} alt='Movies' key={movie.id} style={{width:"250px",objectFit:"cover",borderRadius:"10px"}}></img>
          <p key={movie.id+1} ><span className='desc'>Description :</span> {movie.overview ?(movie.overview):("Description Not Available")}</p>
          <p key={movie.id+2} ><span className='release'>Movie Released On :</span> {movie.release_date ?(movie.release_date):("Date is not Available")}</p>
          </>
          ))}
    </div>
    </div>
  )
}

export default Single