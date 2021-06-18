import classes from "./Dialogs.module.css";
import React, {ChangeEvent} from "react";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {
    ActionsTypes,
    DialogsPageType,
    newMessageBodyActionCreator,
    sendMessageBodyActionCreator, StateType,
    StoreType
} from "../Redux/state";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";

type PropsType = {
    store: StoreType
}

// const DialogsContainer: React.FC<PropsType> = (props) => {
//     let DialogsPage = props.store.getState().DialogsPage
//
//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageBodyActionCreator())
//     }
//
//     let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
//         let body = e.target.value;
//         props.store.dispatch(newMessageBodyActionCreator(body))
//     }
//
//     return (
//         <Dialogs
//             DialogsPage={DialogsPage}
//             onSendMessageClick={onSendMessageClick}
//             onNewMessageChange={onNewMessageChange}
//         />
//     )
// }

let mapStateToProps = (state: AppStateType) => {
    return {
        DialogsPage: state.DialogsPage
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageBodyActionCreator())
        },
        onNewMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(newMessageBodyActionCreator(e.target.value))
        }
    }
}

export const SuperDialogsContainer: React.FC<PropsType> = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default SuperDialogsContainer;