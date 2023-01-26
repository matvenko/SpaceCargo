import React from "react";
import ReactDOM from "react-dom/client";
import App from "../App";


if('renders without crashing', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(dev)
});
