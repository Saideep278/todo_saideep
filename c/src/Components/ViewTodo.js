import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setTodos } from '../actions/todos'

import { Link } from 'react-router-dom'

const ViewTodo = ({ setData,setCurrentId }) => {
  let data = useSelector((state) => state.tododata.todos)


  

  return (
    <div>
      <center>
        <h1>Todos</h1>
        <table style={{ padding: 10 }} >
          <tr>
            <th width='150px' >Todo </th>
            <th width='150px' >Email</th>
            <th width='150px' >Status</th>
          </tr>
          {
            data.map((i) => (
                
                  <tr>
                    <td>  {i.name} </td>
                    <td> {i.email} </td>
                    <td> {i.selectedOption}  </td> 
                    <button onClick={(e)=>{
                      e.stopPropagation()
                      setCurrentId(i.email)
                    }}  >Edit</button>
                  </tr>
               
              
            ))
          }
        </table>
      </center>
    </div>
  )
}

export default ViewTodo