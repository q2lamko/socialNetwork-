import React from "react";
import "./App.css";
import {Route, withRouter} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./components/Redux/app-reducer";
import {AppStateType} from "./components/Redux/redux-store";
import Preloader from "./components/Common/Preloader/Preloader";

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <Navbar/>
                <HeaderContainer/>
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?"
                           render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs"
                           render={() => <DialogsContainer/>}/>
                    <Route path="/users"
                           render={() => <UsersContainer/>}/>
                    <Route path="/login"
                           render={() => <LoginPage/>}/>
                    <Route path="/navigation" render={() => <Navbar/>}/>
                    {/*<Route path='/music' component={() => <Music/>}/>*/}
                    {/*<Route path='/settings' component={() => <Settings/>}/>*/}
                </div>
            </div>
        )
    }
}

type mapStateToPropsType = {
    initialized: boolean
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    initialized: state.app.initialized
})
type mapDispatchToPropsType = {
    initializeApp: () => void
}
type AppPropsType = mapStateToPropsType & mapDispatchToPropsType

export default compose<React.ComponentType>(withRouter, connect(mapStateToProps, {initializeApp}))(App)
