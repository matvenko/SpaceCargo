import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/cargo-reducer";
import Cargo from "./Cargo";


const CargoContainer = (props) => {

    let state = props.store.getState().cargoPage

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (message) =>{
        props.store.dispatch(updateNewMessageActionCreator(message));
    }

    return (
        <Cargo
            updateNewMessageText={onMessageChange}
            addMessage={addMessage}
            newsData={state.newsData}
            messagesData={state.messagesData}
            newMessageText={state.newMessageText} />
    )
}

export default CargoContainer;