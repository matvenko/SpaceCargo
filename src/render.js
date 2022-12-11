import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/bootstrap.css';
import './css/style.css';
import './css/font-awesome.css';
import App from './App';
import {addMessage, updateNewMessageText} from "./redux/state";


const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (props) => {
    root.render(
        <React.StrictMode>
            <App state={props} addMessage={addMessage} updateNewMessageText={updateNewMessageText} />
        </React.StrictMode>
    );
}

