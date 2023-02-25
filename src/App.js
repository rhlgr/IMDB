import React from 'react'
import {Routes,Route} from "react-router-dom"
import './App.css';
import Home from "./pages/Home"
import Header from "./components/header/Header"
import Movielist from './movielist/Movielist';
import Moviedetail from './movieDetail/Moviedetail';

const App = () => {
  return (
    <div className='App'>
      <Header/>
    <Routes>
      <Route index element= {<Home/>}></Route>
      <Route path='movie/:id' element= {<Moviedetail/>}></Route>
      <Route path='movies/:type' element= {<Movielist/>}></Route>
      <Route path='/*' element= {<h1>Erorr page</h1>}></Route>
    </Routes>
    
    </div>

  )
}

export default App