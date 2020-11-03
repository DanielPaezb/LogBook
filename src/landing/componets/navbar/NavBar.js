import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

export const NavBar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/team" >Team</NavLink>
                    </li>
                    <li>
                        <NavLink to="/terms" >Terms</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" >SignIn</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register" >SignUp</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
