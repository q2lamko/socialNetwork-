import React from "react";
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    isAuth: boolean
    login: string
    logout: () => void
}

const Header: React.FC<PropsType> = (props) => {
    return (
        <header className={classes.header}>

            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>)
}

export default Header;
