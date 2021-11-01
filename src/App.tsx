import React from 'react';
import './App.css';
import Profile from './components/Content/Profile'
import {Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import store from "./components/Redux/redux-store";
import SuperDialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersComponent from "./components/Users/UsersComponent";
import UsersContainer from "./components/Users/UsersContainer";


const App = () => {
    const state = store.getState()


    return (

        <div className='app-wrapper'>
            <Navbar/>
            <Header/>
            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={() => <Profile/>}/>
                <Route path='/dialogs'
                       render={() => <SuperDialogsContainer/>}/>
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
