import React from 'react';
import Header from "./Header";
import {AppStateType} from "../Redux/redux-store";
import {connect} from "react-redux";
import {dataType, setAuthUserData} from "../Redux/auth-reducer";
import {authAPI} from "../../API/API";

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        authAPI.getAuth().then(response => {
            if (response.resultCode === 0) {
                // let {id,login,email} = response.data.data
                this.props.setAuthUserData(response.data)
            }
        })
    }

    render() {
        return <Header
            setAuthUserData={this.props.setAuthUserData}
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
}

export type PropsType = mapStatePropsType & mapDispatchPropsType

const mapStateProps = (state: AppStateType) => {
    return {
        autorisation: state.auth.autorisation,
        login: state.auth.login
    }
}

export default connect<mapStatePropsType, mapDispatchPropsType, {}, AppStateType>(mapStateProps, {setAuthUserData})(HeaderContainer);