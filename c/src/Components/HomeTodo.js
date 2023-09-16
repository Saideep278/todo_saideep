import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{marginTop:100}} > 
      <center>
        <h1>Todo App</h1>
        <Link to={'/'} >Home</Link>      <br></br>
        <Link to={'/add'}  >Add Todo</Link>   <br></br>
      </center>
    </div>
  )
}

export default Home