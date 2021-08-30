//  type StoreType = {
//     _state: StateType
//     _rerenderEntireTree: () => void
//     subscribe: (observer: () => void) => void
//     getState: () => StateType
//     dispatch: (action: ActionsTypes) => void
//     // addPost:(postMessage: string)=> void
//     // changeNewText:(newPost: string) => void
// }
//
// type AddPostActionType = {
//     type: "ADD-POST",
//     postMessage: string
// }


import {addPostActionCreator, newTextChangeActionCreator} from "./profile-reducer";
import {newMessageBodyActionCreator, sendMessageBodyActionCreator} from "./dialogs-reducer";
import {followAC, setUsersAC, unfollowAC,} from "./users-reducer";

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof newTextChangeActionCreator>
    | ReturnType<typeof newMessageBodyActionCreator>
    | ReturnType<typeof sendMessageBodyActionCreator>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>


// let store: StoreType = {
//     _state: {
//         ProfilePage: {
//             newPostText: 'it-kamaz',
//             PostsData: [
//                 {message: 'my first post on this page', id: 1, likesCount: 1},
//                 {message: 'my second post on this page', id: 2, likesCount: 3},
//                 {message: 'this is realy hardcore ', id: 3, likesCount: 3}
//             ],
//         },
//         DialogsPage: {
//             messagesData: [
//                 {id: 1, message: 'Hello'},
//                 {id: 2, message: 'Privet'},
//                 {id: 3, message: 'Shalom'},
//
//             ],
//             DialogsData: [
//                 {id: 1, name: 'Maxim'},
//                 {id: 2, name: 'Lena'},
//                 {id: 3, name: 'Stas'},
//                 {id: 4, name: 'Ezik'},
//                 {id: 5, name: 'Stas'},
//             ],
//             newMessageBody: "",
//         }
//
//     },
//
//     _rerenderEntireTree() {
//         console.log("state changed")
//     },
//     subscribe(observer) {
//         this._rerenderEntireTree = observer
//     },
//     getState() {
//         return this._state
//     },
//
//     // addPost(postMessage: string) {
//     //     const newPost: PostType = {
//     //         id: new Date().getTime(),
//     //         message: postMessage,
//     //         likesCount: 0,
//     //     };
//     //
//     //     this._state.ProfilePage.PostsData.push(newPost)
//     //     this._rerenderEntireTree();
//     // },
//     // changeNewText(newPost: string) {
//     //     this._state.ProfilePage.newPostText = newPost;
//     //     this._rerenderEntireTree();
//     // },
//     dispatch(action) {
//
//         this._state.ProfilePage = profileReducer(this._state.ProfilePage, action)
//         this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action)
//         this._rerenderEntireTree()
//
//         // if (action.type === "ADD-POST") {
//         //     const newPost: PostType = {
//         //         id: new Date().getTime(),
//         //         message: action.postMessage,
//         //         likesCount: 0,
//         //     };
//         //
//         //     this._state.ProfilePage.PostsData.push(newPost)
//         //     this._rerenderEntireTree();
//         // } else if (action.type === "UPDATE-NEW-POST-TEXT") {
//         //     this._state.ProfilePage.newPostText = action.newPost;
//         //     this._rerenderEntireTree();
//         // } else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
//         //     this._state.DialogsPage.newMessageBody = action.body
//         //     this._rerenderEntireTree();
//         // } else if (action.type === "SEND-MESSAGE") {
//         //     let body = this._state.DialogsPage.newMessageBody;
//         //     this._state.DialogsPage.newMessageBody = "";
//         //     this._state.DialogsPage.messagesData.push({id: 6, message: body})
//         //     this._rerenderEntireTree()
//         // }
//     }
// }
type MessageType = {
    id: number
    message: string
}

type DialogsPageType = {
    messagesData: Array<MessageType>
    DialogsData: Array<DialogDataType>
    newMessageBody: string
}

type DialogDataType = {
    id: number
    name: string
}

export type PostType = {
    message: string
    id: number
    likesCount: number
}

export type PostsDataType = Array<PostType>

export type ProfilePageType = {
    PostsData: PostsDataType
    newPostText: string
}

export type StateType = {
    ProfilePage: ProfilePageType
    DialogsPage: DialogsPageType
    UsersPage: UsersPageType
}

export type UsersPageType = Array<UserType>

export type UserType = {
    id: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

export type LocationType = {
    country: string
    city: string
}

export default 15;