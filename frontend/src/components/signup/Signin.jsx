import React from 'react'
import './Signup.css'

const Signin = () => {
    return (
        <div className='signin'>
            <div className='container'>
                <div className='row'>
                    <div className='column d-flex justify-content-center align-items-center'>
                        <div className='signup-container d-flex flex-column'>
                            <h1 className='sign-up-heading'>Sign In</h1>
                            <input className='p-2 my-3 input-signup' name='email' type="email" placeholder='Enter your email' />
                            <input className='p-2 my-3 input-signup' name='username' type="username" placeholder='Enter your username' />
                            <input className='p-2 my-3 input-signup' name='password' type="password" placeholder='Enter your password' />
                            <button className='btn-signup p-2'>SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin
