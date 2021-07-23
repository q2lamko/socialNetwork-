import {ChangeEvent} from "react";

import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";
import {InitialStateType, newMessageBodyActionCreator, sendMessageBodyActionCreator} from "../Redux/dialogs-reducer";
import {Dispatch} from "redux";


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

// export type DialogsPageType = {
//     messagesData: Array<MessageType>
//     DialogsData: Array<DialogDataType>
//     newMessageBody: string
// }

export type DialogDataType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

type MapStatePropsType = {
    DialogsPage: InitialStateType
}

type MapDispatchPropsType = {
    onSendMessageClick: () => void,
    onNewMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        DialogsPage: state.DialogsPage,

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