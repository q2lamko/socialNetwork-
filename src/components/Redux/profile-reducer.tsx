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

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes):InitialStateType => {

    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postMessage,
                likesCount: 0,
            };

            state.PostsData.push(newPost)
            break;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newPost;
            break;
    }

    return state
}

