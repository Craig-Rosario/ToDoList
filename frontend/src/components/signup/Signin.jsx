import React, { useState } from 'react';
import './Signup.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const history=useNavigate();
    const [Inputs, setInputs] = useState({
        email: "",
        password: "",
    });

    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...Inputs, [name]: value });
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/v1/signin", Inputs);
            setInputs({ email: "", password: "" }); 
            history("/todo")

        } catch (error) {
            console.error("Error during sign-in:", error);
            alert("Sign-in failed. Please check your credentials.");
        }
    };

    return (
        <div className='signin'>
            <div className='container'>
                <div className='row'>
                    <div className='column d-flex justify-content-center align-items-center'>
                        <div className='signup-container d-flex flex-column'>
                            <h1 className='sign-up-heading'>Sign In</h1>
                            <input
                                className='p-2 my-3 input-signup'
                                name='email'
                                type="email"
                                placeholder='Enter your email'
                                value={Inputs.email}
                                onChange={change}
                            />
                            <input
                                className='p-2 my-3 input-signup'
                                name='password'
                                type="password"
                                placeholder='Enter your password'
                                value={Inputs.password}
                                onChange={change}
                            />
                            <button className='btn-signup p-2' onClick={submit}>Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
