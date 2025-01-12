import React from 'react'
import './Todo.css'
import { ImCancelCircle } from "react-icons/im";
const Update = ({disp}) => {
  return (
    <div className='p-5 d-flex justify-content-center align-items-center flex-column'> 
      <h3>Update your task</h3>
      <input type='text' className='todo-inputs my-4 w-50 p-3'/>
      <textarea className='todo-inputs w-50 p-3'/>
      <div className='update-buttons'>
        <button className='btn edit-btn my-4 mx-3 justify-content-start'>Update</button>
        <button className='edit-close' onClick={()=>disp("none")}><ImCancelCircle/>Close</button>
      </div>
    </div>
  )
}

export default Update
