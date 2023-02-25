import React ,{useEffect,useState} from 'react'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import"./Card.css";
import{Link} from "react-router-dom"





const Card = ({movie}) => {
const [isloading, setisloading] = useState(true)
    
useEffect(() => {
  setTimeout(() => {
    setisloading(false)
  }, 1500);


}, [])


  return (
    <div className='cards'>
{
    isloading ? <div className='card'  >
    <SkeletonTheme color = "#0202020" highlightColor='#444'>
        <Skeleton height={300} duration={2}/>
    </SkeletonTheme>
    </div> : 
    <Link className='a'  to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
<div className='card1'  >
    <img height={300}  src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path:""}`} alt="" />
    {/* <div className="card_overlay">
                   <div className="card_title">
                    {movie ? movie.original_title : ""}
                   </div>
                   <div className="card_runtime">
                    {movie ? movie.release_date : ""} <span className='card_rating'>{movie ? movie.vote_average :""} <i className='fas fa-star'>{""}</i> </span>
                   </div>
                   <div className="card_description">{movie ? movie.overview :""}</div>
                </div> */}
</div>

    </Link>
}
</div>
  )
}

export default Card