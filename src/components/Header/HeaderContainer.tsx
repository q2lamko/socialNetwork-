import React from 'react';
import Header from "./Header";
import {AppStateType} from "../Redux/redux-store";
import {connect} from "react-redux";
import {getAuthUserData} from "../Redux/auth-reducer";


class HeaderContainer extends React.Component<any> {
    componentDidMount() {
        this.props.auth()
    }

    render() {
        return <Header
            isAuth={this.props.isAuth}
            login={this.props.login}
        />
    }
}

type mapStatePropsType = {
    isAuth: boolean
    login: string
}
type mapDispatchPropsType = {
    // setAuthUserData: (data: dataType) => void
    auth: () => void
}

export type PropsType = mapStatePropsType & mapDispatchPropsType

const mapStateProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateProps, {auth: getAuthUserData})(HeaderContainer);