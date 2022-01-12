import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {AppStateType} from "../components/Redux/redux-store";


type mapStatePropsType = {
    isAuth: boolean | null
}
const mapStateProps = (state: AppStateType): mapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: mapStatePropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T}/>
    }

    return connect(mapStateProps)(RedirectComponent)
}

export default WithAuthRedirect;