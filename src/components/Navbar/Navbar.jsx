import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
<nav className={classes.nav}>
    <div>
        <NavLink to='/profile' className={classes.button}>Profile</NavLink>
    </div>
    <div>
        <NavLink to='/dialogs' className={classes.button}>Dialogs</NavLink>
    </div>
    <div>
        <NavLink to='/news' className={classes.button}>News</NavLink>
    </div>
    <div>
    <NavLink to='/music' className={classes.button}>Music</NavLink>
    </div>
    <div>
        <NavLink to='/settings' className={classes.button}>Settings</NavLink>
    </div>
</nav>)
}

export default Navbar;