import {ActionsTypes} from "./state";

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
       case "SEND-MESSAGE":
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, {id: 6, message: action.newMessageBody}]
            }
    }
    return state
}


const SEND_MESSAGE_BODY = "SEND-MESSAGE"
export const sendMessageBodyActionCreator = (newMessageBody: string) => {
    return {
        type: SEND_MESSAGE_BODY, newMessageBody
    } as const
}