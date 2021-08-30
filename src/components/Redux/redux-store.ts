import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";


export type AppStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers(
    {
        ProfilePage: profileReducer,
        DialogsPage: dialogsReducer,
        UsersPage: usersReducer
    })
let store = createStore(rootReducer);


export default store;