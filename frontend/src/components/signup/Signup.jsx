import React, { useState } from 'react'
import './Signup.css'


const Signup = () => {
    const [Inputs, setInputs] = useState({ 
        email: "", 
        username: "", 
        password: "" 
    })
    const change = (e) => {
        const { name, value } = e.target;
        setInputs({...Inputs,[name]:value})
    }
    const submit=(e)=>{
        e.preventDefault();
        setInputs({
            email: "", 
            username: "", 
            password: "" 
        })
        console.log(Inputs);
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
