import React from 'react'
import Navbar from '../navbar/Navbar'
import './Home.css'
const Home = () => {
    return (
        <div className='home d-flex justify-content-center align-items-center'>
            <div className='container'>
                <h1>Organize your work and<br />schedule, finally!</h1>
                <p>Become focused and maintain your tasks</p>
                <button className='home-btn'>Make tOdo list</button>
            </div>
        </div>
    )
}

export default Home
