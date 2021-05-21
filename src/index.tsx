import React from 'react';
import './index.css';
import store  from './components/Redux/state';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    store={store}

                /></BrowserRouter>

        </React.StrictMode>,
        document.getElementById('root')
    );
}




store.subscribe(rerenderEntireTree);
rerenderEntireTree();
reportWebVitals();
