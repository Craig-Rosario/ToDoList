import React from 'react'
import './Todo.css'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
const TodoCards = ({ title, body }) => {
    return (
        <div className='p-3 bg-red todo-card'>
            <div>
                <h4>{title}</h4>
                <p className='todo-card-p'>{body.split("", 77)}...</p>
            </div>
            <div className='d-flex justify-content-around'>
                <div className='d-flex justify-content-around card-icon-head p-3'>
                    <FaEdit className='card-icons'/>Edit
                </div>
                <div className='d-flex justify-content-around card-icon-head p-3 del-head text-danger'>
                    <MdDelete  className='card-icons del'/>Delete
                </div>
            </div>
        </div>
    )
}

export default TodoCards
