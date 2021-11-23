import React from 'react';
import Header from "./Header";
import {AppStateType} from "../Redux/redux-store";
import {connect} from "react-redux";
import {auth, dataType, setAuthUserData} from "../Redux/auth-reducer";


class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.auth()
    }

    render() {
        return <Header
            autorisation={this.props.autorisation}
            login={this.props.login}
        />
    }
}

type mapStatePropsType = {
    autorisation: boolean
    login: string
}
type mapDispatchPropsType = {
    setAuthUserData: (data: dataType) => void
    auth: () => void
}

export type PropsType = mapStatePropsType & mapDispatchPropsType

const mapStateProps = (state: AppStateType) => {
    return {
        autorisation: state.auth.autorisation,
        login: state.auth.login
    }
}

export default connect<mapStatePropsType, mapDispatchPropsType, {}, AppStateType>(mapStateProps, {
    setAuthUserData, auth
})(HeaderContainer);