import {ActionsTypes, DialogsPageType, StateType} from "./state";

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {


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

