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

}

export type StateType = {
    ProfilePage: ProfilePageType
    DialogsPage: DialogsPageType
}

let state: StateType = {
    ProfilePage: {
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

export default state;