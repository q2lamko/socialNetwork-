import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk"
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import {reducer as formReducer} from "redux-form"
import {appReducer} from "./app-reducer";


export type AppStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersReducer,
        auth: authReducer,
        app: appReducer,
        form: formReducer,
    })

export const composeEnhancers =
    (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer,  composeEnhancers(applyMiddleware(thunk)));

// let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
