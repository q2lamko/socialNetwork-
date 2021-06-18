import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {StoreType} from "./state";

export type AppStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({ProfilePage: profileReducer,DialogsPage: dialogsReducer})
let store:StoreType = createStore(rootReducer);



export default store;