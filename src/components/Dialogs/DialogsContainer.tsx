import {ChangeEvent} from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";
import {InitialStateType, newMessageBodyActionCreator, sendMessageBodyActionCreator} from "../Redux/dialogs-reducer";
import {Dispatch} from "redux";



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
}
type MapDispatchPropsType = {
    onSendMessageClick: () => void,
    onNewMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageBodyActionCreator())
        },
        onNewMessageChange: (e) => {
            dispatch(newMessageBodyActionCreator(e.target.value))
        }
    }
}

export type DialogsPropsType = MapDispatchPropsType & MapStatePropsType

export const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default SuperDialogsContainer;