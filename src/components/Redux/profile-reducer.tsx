import {ActionsTypes, PostType, ProfilePageType, StateType} from "./state";


type InitialStateType = typeof initialState

let initialState = {
    newPostText: 'it-kamaz',
    PostsData: [
        {message: 'my first post on this page', id: 1, likesCount: 1},
        {message: 'my second post on this page', id: 2, likesCount: 3},
        {message: 'this is realy hardcore ', id: 3, likesCount: 3}
    ],
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case "ADD-POST":
            return {
                ...state,
                PostsData: [...state.PostsData, {
                    id: new Date().getTime(),
                    likesCount: 0,
                    message: state.newPostText}]
            }
        case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostText: action.newPost}
    }

    return state
}

