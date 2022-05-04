import React from "react";
import {AppStateType} from "../Redux/redux-store";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../Redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component<any> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header
            isAuth={this.props.isAuth}
            login={this.props.login}
            logout={this.props.logout}
        />
    }
}

type mapStatePropsType = {
    isAuth: boolean
    login: string
}
type mapDispatchPropsType = {
    getAuthUserData: () => void,
    logout: () => void
}

export type PropsType = mapStatePropsType & mapDispatchPropsType

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, { getAuthUserData, logout})(HeaderContainer);
