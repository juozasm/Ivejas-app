import React from 'react';
import {NavLink} from 'react-router-dom'

const Nav = (props)=>{
    return (
        <nav>
          <NavLink exact activeClassName='active' to='/'>
            Dashboard
          </NavLink>
          <NavLink activeClassName='active' to='/customers'>
            Customers
          </NavLink>
          <NavLink activeClassName='active' to='/about'>
            About
          </NavLink>
        </nav>
    );
};


export default Nav;