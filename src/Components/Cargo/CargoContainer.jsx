import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/cargo-reducer";
import Cargo from "./Cargo";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return {
        cargoPage: state.cargoPage
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onMessageChange: (message) => {
            dispatch(updateNewMessageActionCreator(message))
        }
    }
}

const CargoContainer = connect(mapStateToProps, mapDispatchToProps)(Cargo);

export default CargoContainer;