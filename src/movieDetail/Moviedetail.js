import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Moviedetail = () => {
const [movie, setmovie] = useState()
    const {id} = useParams()

    useEffect(()=>{
        getdata()
        window.scrollTo(0,0)
    },[])

    const getdata = ()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setmovie(data.results))
    }

  return (
    <div>Moviedetail</div>
  )
}

export default Moviedetail