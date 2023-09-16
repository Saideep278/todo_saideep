import React,{useEffect} from 'react'

import { BrowserRouter, Routes, Route   } from 'react-router-dom'

import Home from './Components/HomeTodo'
import AddTodo from './Components/AddTodo'
import ViewTodo from './Components/ViewTodo'

//import {getPizzas,getIng} from './actions/pizza'
 
const App = () => {

//   const dispatch = useDispatch() 

//     useEffect(()=>{
//        dispatch(getPizzas())
//        dispatch(getIng())
//     },[])
    
  return (
        <BrowserRouter>
          <div>    
            <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/add"  element={<AddTodo/>} />
            <Route path="/view"  element={<ViewTodo/>} />
            
            </Routes>
          </div>
        </BrowserRouter>
  )
}

export default App

//<Route path="/menu" exact element={<Menu/>} />
  //          <Route path="/pizza" exact element={<Pizza/>} />
    //        <Route path="/cart" exact element={<Cart/>} /> npm i react-dom/client react-redux @reduxjs/toolkit redux-thunk react-router-dom 