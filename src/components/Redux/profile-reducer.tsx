import {ActionsTypes, PostType, ProfilePageType, StateType} from "./state";

export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {

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

