


import {addPostActionCreator, newTextChangeActionCreator, setUserProfile} from "./profile-reducer";
import {newMessageBodyActionCreator, sendMessageBodyActionCreator} from "./dialogs-reducer";
import {
    follow,
    setCurrentPage, setToggleInFollow,
    setToggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow,
} from "./users-reducer";
import {setAuthUserData} from "./auth-reducer";

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof newTextChangeActionCreator>
    | ReturnType<typeof newMessageBodyActionCreator>
    | ReturnType<typeof sendMessageBodyActionCreator>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setToggleIsFetching>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof setToggleInFollow>


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


// export type StateType = {
//     ProfilePage: ProfilePageType
//     DialogsPage: DialogsPageType
//     // UsersPage: Array<UserType>
// }


export default 15;