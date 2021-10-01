import {ActionsTypes} from "./state";

type MessageType = {
    id: number
    message: string
}

export type DialogsPageType = {
    messagesData: Array<MessageType>
    DialogsData: Array<DialogDataType>
    newMessageBody: string
}

type DialogDataType = {
    id: number
    name: string
}

export type InitialStateType = typeof initialState

let initialState = {
    messagesData: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Privet'},
        {id: 3, message: 'Shalom'},
    ],
    DialogsData: [
        {id: 1, name: 'Maxim'},
        {id: 2, name: 'Lena'},
        {id: 3, name: 'Stas'},
        {id: 4, name: 'Ezik'},
        {id: 5, name: 'Stas'},
    ],
    newMessageBody: "",
}

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {


    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            return {...state, newMessageBody: action.body}
        case "SEND-MESSAGE":
            let body = state.newMessageBody;
            return {...state, newMessageBody: '', messagesData: [...state.messagesData, {id: 6, message: body}]}
        // state.messagesData.push({id: 6, message: body})
        // // state.newMessageBody = "";
        // break;
    }

    return state
}

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"

export const newMessageBodyActionCreator = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}

const SEND_MESSAGE_BODY = "SEND-MESSAGE"

export const sendMessageBodyActionCreator = () => {
    return {
        type: SEND_MESSAGE_BODY,

    } as const
}