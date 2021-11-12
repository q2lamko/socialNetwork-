import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import SuperDialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {

    return (
        <div className='app-wrapper'>
            <Navbar/>
            <HeaderContainer/>
            <div className='app-wrapper-content'>
                <Route path='/profile/:userId'
                       render={() => <ProfileContainer />}/>
                <Route path='/dialogs'
                       render={() => <SuperDialogsContainer />}/>
                <Route path='/users'
                       render={() => <UsersContainer/>}/>
                <Route path='/navigation' render={() => <Navbar/>}/>
                {/*<Route path='/music' component={() => <Music/>}/>*/}
                {/*<Route path='/settings' component={() => <Settings/>}/>*/}
            </div>
        </div>
    );
}

export default App;
