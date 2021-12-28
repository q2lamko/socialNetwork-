import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import {reducer as formReducer} from 'redux-form'


export type AppStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        UsersPage: usersReducer,
        auth: authReducer,
        form: formReducer,
    })
let store = createStore(rootReducer, applyMiddleware(thunk));
export default store;