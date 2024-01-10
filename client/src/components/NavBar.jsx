import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navigation">
      <h1>FitFlex</h1>
      <NavLink exact to="/" activeClassName="nav-active">
        <li>Home</li>
      </NavLink>
      <NavLink to="/about" activeClassName="nav-active">
        <li>About</li>
      </NavLink>
    </div>
  );
};

export default NavBar;
