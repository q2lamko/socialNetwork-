import React, {ComponentType} from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";
import {actions, InitialStateType} from "../Redux/dialogs-reducer";
import {compose, Dispatch} from "redux";
import WithAuthRedirect from "../../HOC/withAuthRedirect";

export type DialogDataType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

type MapStatePropsType = {
    dialogsPage: InitialStateType
    isAuth: boolean | null
}
type MapDispatchPropsType = {
    onSendMessageClick: (newMessageBody: string) => void,
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        onSendMessageClick: (newMessageBody) => {
            dispatch(actions.sendMessageBodyActionCreator(newMessageBody))
        },
    }
}

export type DialogsPropsType = MapDispatchPropsType & MapStatePropsType

export default compose<ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)

