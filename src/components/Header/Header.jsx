import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
    <header className={classes.header}>
        <img className={classes.img} src='https://i.pinimg.com/736x/48/3a/6c/483a6c355deffde74c84cb5ca2636ee4--logo-software-security-logo.jpg'></img>
    </header>)
}

export default Header;