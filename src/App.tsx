import React from 'react';
import './App.css';
import Profile from './components/Content/Profile'
import Dialogs from "./components/Dialogs/Dialogs";

import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import store from "./components/Redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SuperDialogsContainer from "./components/Dialogs/DialogsContainer";



const App = () => {
    const state = store.getState()
    console.log(state)

    return (

        <div className='app-wrapper'>
            <Navbar/>
            <Header/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() =>
                    <Profile
                        // profilePage={state.ProfilePage}
                        // dispatch={props.store.dispatch.bind(props.store)}

                    />}/>
                <Route path='/dialogs' render={() =>
                    <SuperDialogsContainer


                    />}/>
                <Route path='/navigation' render={() => <Navbar/>}/>
                {/*<Route path='/music' component={() => <Music/>}/>*/}
                {/*<Route path='/settings' component={() => <Settings/>}/>*/}
            </div>
        </div>

    );
}

export default App;
