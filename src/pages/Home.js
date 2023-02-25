import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import "./Home.css"
import { Link } from 'react-router-dom';
import Movielist from '../movielist/Movielist';
const Home = () => {
const [popularmovies, setpopularmovies] = useState([])

    useEffect(() => {
  fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
  .then(res => res.json())
  .then(data => setpopularmovies(data.results))
    }, [])
    
  return (
    <div>
        
    <div className='poster'>

        <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
        >{
            popularmovies.map(movie => (
                <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`}>
                <div className='mainposter'>
                    <img className='posterimg' height={620} style={{marginLeft:"0vmax"}} src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                </div>
                <div className="posterImage_overlay">
                   <div className="posterImage_title">
                    {movie ? movie.original_title : ""}
                   </div>
                   <div className="posterimage_runtime">
                    {movie ? movie.release_date : ""} <span className='posterImage_rating'>{movie ? movie.vote_average :""} <i className='fas fa-star'>{""}</i> </span>
                   </div>
                   <div className="posterImage_description">{movie ? movie.overview :""}</div>
                </div>
                </Link>
            ))
        }

        </Carousel>
        <Movielist  />
    </div>
        
        
        </div>
  )
}

export default Home