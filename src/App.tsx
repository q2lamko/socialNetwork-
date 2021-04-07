import React from 'react';
import './App.css';
import Profile from './components/Content/Profile'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Dialogs from "./components/Dialogs/Dialogs";
import {addPost, PostType, StateType} from "./components/Redux/state";
import {Route} from 'react-router-dom';

type PropsType = {
    state: StateType
    addPost: (postMessage: string) => void
    changeNewText: (newText: string) => void
}

const App: React.FC<PropsType> = (props) => {

    return (

        <div className='app-wrapper'>
            {/*<Header/>*/}
            {/*  <Navbar/>*/}
            <div className='app-wrapper-content'>
                <Route path='/profile' component={() =>
                    <Profile
                        profilePage={props.state.ProfilePage}
                        addPost={addPost}
                        changeNewText={props.changeNewText}
                    />}/>
                <Route path='/dialogs' component={() => <Dialogs dialogsPage={props.state.DialogsPage}/>}/>
                {/*                <Route path='/news' component={() => <News/>}/>
                <Route path='/music' component={() => <Music/>}/>
                <Route path='/settings' component={() => <Settings/>}/>*/}
            </div>
        </div>

    );
}

export default App;
