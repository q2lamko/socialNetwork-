import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk, {ThunkAction} from "redux-thunk"
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import {reducer as formReducer} from "redux-form"
import {appReducer} from "./app-reducer";

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

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

export default store;
