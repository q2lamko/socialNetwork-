import {InferActionsTypes} from "./redux-store";

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

let initialState = {
    messagesData: [
        {id: 1, message: "Hello"},
        {id: 2, message: "Privet"},
        {id: 3, message: "Shalom"},
    ],
    dialogsData: [
        {id: 1, name: "Maxim"},
        {id: 2, name: "Lena"},
        {id: 3, name: "Stas"},
        {id: 4, name: "Ezik"},
        {id: 5, name: "Stas"},
    ],
    newMessageBody: "",
}

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
       case "SN/DIALOGS/SEND_MESSAGE":
            return {
                ...state,
                newMessageBody: "",
                messagesData: [...state.messagesData, {id: 6, message: action.newMessageBody}]
            }
    }
    return state
}

export const actions = {
    sendMessageBodyActionCreator:(newMessageBody: string)=> (  {
        type: "SN/DIALOGS/SEND_MESSAGE", newMessageBody
    } as const),
}


