import React from 'react';
import './App.css';
import Profile from './components/Content/Profile.jsx'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

import {BrowserRouter, Route} from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Dialogs from "./components/Dialogs/Dialogs";
import Post from "./components/Content/Post/Post";
import MyPosts from "./components/Content/myPosts/MyPosts";


function App(props:any) {



    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' component={() => <Profile PostsData={props.PostsData}/>}/>
                    <Route path='/dialogs' component={() => <Dialogs dialogsData={props.dialogsData}
                                                                     messageData={props.messageData}/>}/>
                    <Route path='/news' component={() => <News/>}/>
                    <Route path='/music' component={() => <Music/>}/>
                    <Route path='/settings' component={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
