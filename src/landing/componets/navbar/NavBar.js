import React from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.scss';

export const NavBar = () => {
  return (
    <header className="header--nav">
      <nav>
        <ul>
          <li>
            <NavLink to="/" >Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" >About</NavLink>
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
