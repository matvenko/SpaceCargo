import {combineReducers, legacy_createStore as createStore} from "redux";
import cargoReducer from "./cargo-reducer";
import loginReducer from "./login-reducer";

let reducers = combineReducers({
    cargoPage: cargoReducer,
    loginPage: loginReducer
});

let store = createStore(reducers);


export default store;