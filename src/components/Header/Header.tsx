import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

type PropsType = {
    autorisation: boolean
    login: string
}

const Header: React.FC<PropsType> = (props) => {
    return (
        <header className={classes.header}>
            <img className={classes.img} alt=''
                 src='https://i.pinimg.com/736x/48/3a/6c/483a6c355deffde74c84cb5ca2636ee4--logo-software-security-logo.jpg'>{}</img>
            <div className={classes.loginBlock}>
                {props.autorisation ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>)
}

export default Header;