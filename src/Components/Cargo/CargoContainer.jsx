import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/cargo-reducer";
import Cargo from "./Cargo";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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


let mapStateToProps = (state) =>{
    return {
        cargoPage: state.cargoPage
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Cargo);