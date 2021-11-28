import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {AppStateType} from "../components/Redux/redux-store";


type mapStatePropsType = {
    autorisation: boolean
}
const mapStateProps = (state: AppStateType): mapStatePropsType => {
    return {
        autorisation: state.auth.autorisation
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: mapStatePropsType) => {
        let {autorisation, ...restProps} = props
        if (!autorisation) return <Redirect to={'/login'}/>

        return <Component {...restProps as T}/>
    }

    return connect(mapStateProps)(RedirectComponent)
}

export default WithAuthRedirect;