import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let PostsData = [
    {message: 'my first post on this page', id: 1, likesCount: 1},
    {message: 'my second post on this page', id: 2, likesCount: 3},
    {message: 'this is realy hardcore ', id: 2, likesCount: 3}
]
let dialogsData = [
    {id: 1, name: 'Maxim'},
    {id: 2, name: 'Lena'},
    {id: 3, name: 'Stas'},
]

let messageData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Privet'},
    {id: 3, message: 'Shalom'},
    {id: 4, message: 'hey'},
]

ReactDOM.render(
    <React.StrictMode>
        <App
            PostsData={PostsData}
            dialogsData={dialogsData}
            messageData={messageData}
        />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
