import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setTodos,updateTodos } from '../actions/todos' 

const Form = ({currentId,setCurrentId}) => {
    const [data, setData] = useState({  name: '', email: '', selectedOption: 'NotCompleted' })
    
    const tempdata = useSelector((state) => (currentId ? state.tododata.todos.find((message) => message.email === currentId) : null));
    useEffect(()=>{
        if (tempdata) setData(tempdata) 
      },[tempdata])

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (currentId === '') {
          dispatch(setTodos(data))
          clear();
        } else {
          dispatch(updateTodos(currentId,data));
          clear();
        }        
        setCurrentId('')
      }

    const clear = () =>{
        setCurrentId(0);
        setData({ name: '', email: '', selectedOption: 'NotCompleted' })
    }

    return (
        <div>
            <form autoComplete="off" validate="true" onSubmit={handleSubmit} >
                <input value={data.name} onChange={(e) => { setData({ ...data, name: e.target.value }) }} placeholder='Enter Todo Name' /> <br /><br />

                <input value={data.email} onChange={(e) => { setData({ ...data, email: e.target.value }) }} placeholder='Enter Email' /> <br /><br />

                <select value={data.selectedOption} onChange={(e) => { setData({ ...data, selectedOption: e.target.value }) }} >
                    <option value="Not Completed">Not Completed</option>
                    <option value="Completed">Completed</option>
                </select> <br /><br />
                <button onClick={clear} > Clear All </button> <br/> <br/>
                <button type='submit' >Add TODO</button>
            </form>
        </div>
    )
}

export default Form