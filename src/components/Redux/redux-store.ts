import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {ActionsTypes, StateType} from "./state";




export type AppStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({ProfilePage: profileReducer,DialogsPage: dialogsReducer})
let store = createStore(rootReducer);



export default store;