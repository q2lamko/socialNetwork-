let rerenderEntireTree = () => {
    console.log("123")
}

export type MessageType = {
    id: number
    message: string
}

export type DialogsPageType = {
    messagesData:  Array<MessageType>
    DialogsData: Array<DialogDataType>

}

export type DialogDataType = {
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

}

let state: StateType = {
    ProfilePage: {
        newPostText: 'it-kamaz',
        PostsData: [
            {message: 'my first post on this page', id: 1, likesCount: 1},
            {message: 'my second post on this page', id: 2, likesCount: 3},
            {message: 'this is realy hardcore ', id: 3, likesCount: 3}
        ],
    },
    DialogsPage: {
        messagesData: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'Privet'},
            {id: 3, message: 'Shalom'},
            {id: 4, message: 'hey'},
        ],
        DialogsData: [
            {id: 1, name: 'Maxim'},
            {id: 2, name: 'Lena'},
            {id: 3, name: 'Stas'},
        ],
    }

}


export const addPost = (postMessage: string) => {
    debugger;
    const newPost: PostType = {
        id: new Date().getTime(),
        message: postMessage,
        likesCount: 0,
    };

    state.ProfilePage.PostsData.push(newPost)
    rerenderEntireTree();
}

export const changeNewText = (newText: string) => {
    state.ProfilePage.newPostText = newText;
    rerenderEntireTree();
}

export const subsrcibe = (observer: () => void) => {
    rerenderEntireTree = observer
}

export default state;