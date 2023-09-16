import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { setTodos,updateTodos } from '../actions/todos'
import { useDispatch } from 'react-redux';
import ViewTodo from './ViewTodo';
import Form from './Form';
const AddTodo = () => {
  const [currentId,setCurrentId] = useState('')

  return (
    <div>
      <center>
        
          <h1>AddTodo</h1>
          <Link to={'/'} >Home</Link>      <br /><br />
          <Form currentId={currentId} setCurrentId={setCurrentId}  />
          <ViewTodo setCurrentId={setCurrentId} />
       
      </center>
    </div>
  )
}

export default AddTodo
//value={selectedOption} onChange={handleDropdownChange}