import React from 'react';
import state, {subscribe} from "./redux/state";
import ReactDOM from 'react-dom/client';

import './css/bootstrap.css';
import './css/style.css';
import './css/font-awesome.css';
import App from './App';
import {addMessage, updateNewMessageText} from "./redux/state";


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (props) => {
    root.render(
        <React.StrictMode>
            <App state={props} addMessage={addMessage} updateNewMessageText={updateNewMessageText} />
        </React.StrictMode>
    );
}

subscribe(rerenderEntireTree)


rerenderEntireTree(state);
