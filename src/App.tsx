import React from 'react';
import './App.css';
import Profile from './components/Content/Profile'
import Dialogs from "./components/Dialogs/Dialogs";
import {StoreType} from "./components/Redux/state";
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

type PropsType = {
    store: StoreType


}

const App: React.FC<PropsType> = (props) => {
    const state = props.store.getState()

    return (

            <div className='app-wrapper'>
                <Navbar/>
                <Header/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() =>
                        <Profile
                            profilePage={props.store._state.ProfilePage}
                            dispatch={props.store.dispatch.bind(props.store)}
                        />}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.store._state.DialogsPage}/>}/>
                    <Route path='/navigation' render={() => <Navbar/>}/>
                    {/*<Route path='/music' component={() => <Music/>}/>*/}
                    {/*<Route path='/settings' component={() => <Settings/>}/>*/}
                </div>
            </div>

    );
}

export default App;
