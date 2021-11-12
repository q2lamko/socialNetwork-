import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";

export type AppStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        UsersPage: usersReducer,
        auth: authReducer
    })
let store = createStore(rootReducer);
export default store;