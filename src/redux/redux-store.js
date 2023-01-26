import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import cargoReducer from "./cargo-reducer";
import loginReducer from "./login-reducer";
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
import appReducer from "./app-reducer";

let reducers = combineReducers({
    cargoPage: cargoReducer,
    loginPage: loginReducer,
    usersPage: usersReducer,
    profilePage: profileReducer,
    auth: authReducer,
    app: appReducer
});

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
        })
        : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
);
const store = createStore(reducers, enhancer);

// let store = createStore(reducers, applyMiddleware(thunk));


window.store = store;

export default store;