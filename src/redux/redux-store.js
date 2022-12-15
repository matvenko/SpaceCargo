import {combineReducers, legacy_createStore as createStore} from "redux";
import cargoReducer from "./cargo-reducer";
import loginReducer from "./login-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    cargoPage: cargoReducer,
    loginPage: loginReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);


export default store;