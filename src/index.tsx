import React from 'react';
import './index.css';
import store from './components/Redux/redux-store';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {StateType} from "./components/Redux/state";
import {Provider} from "react-redux";
import {createStore} from "redux";


export const rerenderEntireTree = (state: StateType) => {
    debugger;
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>

        </React.StrictMode>,
        document.getElementById('root')
    );}


rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

