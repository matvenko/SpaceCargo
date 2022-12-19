import {combineReducers, legacy_createStore as createStore} from "redux";
import cargoReducer from "./cargo-reducer";
import loginReducer from "./login-reducer";
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    cargoPage: cargoReducer,
    loginPage: loginReducer,
    usersPage: usersReducer,
    profilePage: profileReducer
});

let store = createStore(reducers);

window.store = store;

export default store;