import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import cargoReducer from "./cargo-reducer";
import loginReducer from "./login-reducer";
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    cargoPage: cargoReducer,
    loginPage: loginReducer,
    usersPage: usersReducer,
    profilePage: profileReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;