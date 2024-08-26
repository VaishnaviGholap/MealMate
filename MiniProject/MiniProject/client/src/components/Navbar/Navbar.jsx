import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import LoginSignup from '../LoginSignup/LoginSignup';


const Navbar = () => {
    return (
     
        <div>
      \
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar">
         
                <nav className="navbar navbar-light bg-light">
                    <NavLink className="navbar-brand" to="#">
                        <img src="logo.png" width="70" height="70" class="d-inline-block align-top" alt="" />
                    </NavLink>
                </nav>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item active mx-4">
                            <NavLink className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
                        </li>
                        <li className="nav-item mx-4">
                            <NavLink className="nav-link" to="/About">About</NavLink>
                        </li>
                        <li className="nav-item mx-4">
                            <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/LoginSignup">Login</NavLink>
                    </li>
                </ul>
            </div>
        </nav >
      
        </div>
    );
};

export default Navbar;


