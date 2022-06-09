import React, {Suspense} from "react";
import "./App.css";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LoginPage from "./components/Login/Login";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./components/Redux/app-reducer";
import store, {AppStateType} from "./components/Redux/redux-store";
import Preloader from "./components/Common/Preloader/Preloader";

// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
// import UsersContainer from "./components/Users/UsersContainer";
// import HeaderContainer from "./components/Header/HeaderContainer";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const HeaderContainer = React.lazy(() => import("./components/Header/HeaderContainer"));

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <Suspense fallback={<Preloader/>}>
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
                </Suspense>
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

let ContainerApp = compose<React.ComponentType>(withRouter, connect(mapStateToProps, {initializeApp}))(App)

const SamuraiJSApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <ContainerApp/>
        </Provider>
    </BrowserRouter>
}
export default SamuraiJSApp;
