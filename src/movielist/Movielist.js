import React from 'react'
import "./Movielist.css"
import { useEffect, useState } from 'react'
import Card from "../card/Card"
import { useParams } from 'react-router-dom'



const Movielist = () => {
const [movielist, setmovielist] = useState([])
const {type} = useParams()

useEffect(()=>{
    getdata();
},[])

useEffect(()=>{
    getdata();
},[type])

const getdata = ()=>{
    fetch(`https://api.themoviedb.org/3/movie/${type? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
    .then(res => res.json())
    .then(data => setmovielist(data.results))
}

  return (

    <div className='movielist'>
        <h2 className='list_title'>{(type ? type : "POPULAR").toUpperCase()} </h2>
        <div className="list_cards">
            {
          movielist.map((movie)=>(
            <Card movie = {movie}/>
          ))
        }
        </div>
        </div>
  )
}

export default Movielist