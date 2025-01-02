import React from 'react'
import './Navbar.css'
import { LuBookMarked } from "react-icons/lu";
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand"  ><b><LuBookMarked />&nbsp; tOdo</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <a className="nav-link active" aria-current="page"  >Home</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link active" aria-current="page"  >About us</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link active" aria-current="page"  >tOdo</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link active btn-nav" aria-current="page"  >Sign up</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link active btn-nav" aria-current="page"  >Sign in</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link active btn-nav" aria-current="page"  >Log out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
