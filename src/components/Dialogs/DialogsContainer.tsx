import {ChangeEvent, ComponentType} from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";
import {InitialStateType, newMessageBodyActionCreator, sendMessageBodyActionCreator} from "../Redux/dialogs-reducer";
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
    autorisation: boolean
}
type MapDispatchPropsType = {
    onSendMessageClick: () => void,
    onNewMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        autorisation: state.auth.autorisation
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

export default compose<ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)

//
// export const SuperDialogsContainer = WithAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));
// export default SuperDialogsContainer;