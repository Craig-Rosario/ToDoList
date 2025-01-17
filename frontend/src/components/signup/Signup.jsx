import React, { useState } from 'react'
import axios from "axios";
import './Signup.css'
import {useNavigate} from "react-router-dom"
const Signup = () => {
    const history=useNavigate();
    const [Inputs, setInputs] = useState({ 
        email: "", 
        username: "", 
        password: "" 
    })
    const change = (e) => {
        const { name, value } = e.target;
        setInputs({...Inputs,[name]:value})
    }
    const submit= async(e)=>{
        e.preventDefault();
        await axios
        .post("http://localhost:5000/api/v1/register", Inputs)
        .then((response)=>{
            if(response.data.message=="Username or Email already exists"){
                alert(response.data.message);
            }
            else{
                alert(response.data.message);
                setInputs({
                    email: "", 
                    username: "", 
                    password: "" 
                })
                history("/signin");
            }
        });
    }
    return (
        <div className='signup'>
            <div className='container'>
                <div className='row'>
                    <div className='column d-flex justify-content-center align-items-center'>
                        <div className='signup-container d-flex flex-column'>
                            <h1 className='sign-up-heading'>Sign Up</h1>
                            <input
                                className='p-2 my-3 input-signup'
                                name='email'
                                type="email"
                                placeholder='Enter your email'
                                onChange={change}
                                value={Inputs.email}
                            />
                            <input
                                className='p-2 my-3 input-signup'
                                name='username'
                                type="username"
                                placeholder='Enter your username'
                                onChange={change}
                                value={Inputs.username}
                            />
                            <input
                                className='p-2 my-3 input-signup'
                                name='password'
                                type="password"
                                placeholder='Enter your password'
                                onChange={change}
                                value={Inputs.password}
                            />
                            <button className='btn-signup p-2' onClick={submit}>SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Signup
