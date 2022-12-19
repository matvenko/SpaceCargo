import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/redux-store'

import './css/bootstrap.css';
import './css/style.css';
import './css/font-awesome.css';
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
        <Provider store={store}>
            {/*<React.StrictMode>*/}
                <App />
            {/*</React.StrictMode>*/}
        </Provider>
    );

