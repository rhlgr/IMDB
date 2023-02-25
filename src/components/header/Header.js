import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className='header'>
        <div className='headerleft'>
            <Link to= "/" ><img height={100} className='header_icon' src="https://cdn-icons-png.flaticon.com/512/889/889199.png" alt="" /></Link>
            <Link to="/movies/popular" style={{textDecoration:"none"}}> <span> Popular </span></Link>
            <Link to="/movies/top_rated" style={{textDecoration:"none"}}> <span>Top Rated </span></Link>
            <Link to="/movies/upcoming" style={{textDecoration:"none"}}> <span>Upcoming </span></Link>
        </div>
    </div>
  )
}

export default Header