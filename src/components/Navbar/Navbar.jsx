import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div>
                <NavLink to="/profile" className={classes.link}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/users" className={classes.link}>Users</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" className={classes.link}>Dialogs</NavLink>
            </div>
            <div>
                <NavLink to="/news" className={classes.link}>News</NavLink>
            </div>
            <div>
                <NavLink to="/music" className={classes.link}>Music</NavLink>
            </div>
            <div>
                <NavLink to="/settings" className={classes.link}>Settings</NavLink>
            </div>
        </nav>)
}

export default Navbar;
