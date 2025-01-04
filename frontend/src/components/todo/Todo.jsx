import React, { useState } from 'react'
import "./Todo.css"
import TodoCards from './TodoCards';


const Todo = () => {

    const [Inputs, setInputs] = useState({ title: "", body: "" });
    const [Array, setArray] = useState([]);
    const show = () => {
        document.getElementById("text-area").style.display = "block";
    }
    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...Inputs, [name]: value })
    }
    const submit = () => {
        setArray([...Array, Inputs])
        setInputs({ title: "", body: "" });
    }
    return (
        <div className='todo'>
            <div className='todo-main container d-flex justify-content-center align-items-center flex-column'>
                <div className='d-flex flex-column todo-inputs-div w-50 p-2'>
                    <input
                        type="text"
                        placeholder='TITLE'
                        className='my-2 p-2 todo-inputs'
                        onClick={show}
                        name="title"
                        value={Inputs.title}
                        onChange={change}
                    />
                    <textarea
                        id='text-area'
                        type="text"
                        placeholder='BODY'
                        name='body'
                        value={Inputs.body}
                        className='p-2 todo-inputs'
                        onChange={change}
                    />
                </div>
                <div className='w-50 d-flex my-2'>
                    <button className='add-btn p-2' onClick={submit}>Add</button>
                </div>
            </div>
            <div className='todo-body'>
                <div className="container">
                    <div className='row'>
                        {Array && Array.map((item, index) => (
                            <div className='col-lg-3 col-10 mx-5 my-2'>
                                <TodoCards title={item.title} body={item.body}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo
