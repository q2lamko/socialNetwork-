import React from 'react';
import './index.css';
import state, {subsrcibe} from './components/Redux/state';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, changeNewText, StateType} from './components/Redux/state';
import {BrowserRouter} from "react-router-dom";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPost={addPost}
                    changeNewText={changeNewText}

                /></BrowserRouter>

        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderEntireTree();

subsrcibe(rerenderEntireTree);
reportWebVitals();
