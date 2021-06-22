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

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes):InitialStateType => {


    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body
            break;
        case "SEND-MESSAGE":
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messagesData.push({id: 6, message: body})
            break;
    }

    return state
}

