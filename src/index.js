import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/redux-store'

import './css/bootstrap.css';
import './css/style.css';
import './css/font-awesome.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {

    root.render(
        <React.StrictMode>
            <App state={state} store={store} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());
store.subscribe(() => {
    rerenderEntireTree(store.getState());
})