import React from 'react';
import Post from '../Post/Post';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {addPostActionCreator, newTextChangeActionCreator} from "../../Redux/profile-reducer";
import {Dispatch} from "redux";


// const MyPostsContainer: React.FC<PropsType> = (props) => {
//
//     let postDataMap = props.store.getState().ProfilePage.PostsData.map(p => (
//         <Post message={p.message} id={p.id} likesCount={p.likesCount}/>
//     ))
//
//     // let addPost = () => {
//     //     // props.dispatch({type: "ADD-POST", postMessage: props.profilePage.newPostText})
//     //     props.store.dispatch(addPostActionCreator(props.store.getState().ProfilePage.newPostText))
//     // }
//
//     let newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
//         props.store.dispatch(newTextChangeActionCreator(e.currentTarget.value))
//
//     }
//
//     return (
//         <MyPosts
//             newTextChangeHandler={newTextChangeHandler}
//             addPost={addPost}
//             postDosataMap={ptDataMap}
//             profilePage={props.store.getState().ProfilePage}
//         />
//     )
// }

type MapDispatchToPropsType = {
    addPost: () => void
    newTextChangeHandler: (text: string) => void
}

const MapStateToProps = (state: AppStateType) => {
    return {
        postDataMap: state.profilePage.PostsData.map(p => (
            <Post message={p.message} id={p.id} likesCount={p.likesCount}/>)),
        profilePage: state.profilePage,
    }
}

const MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        newTextChangeHandler: (text) => {
            dispatch(newTextChangeActionCreator(text))
        }
    }
}

export const SuperMyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts);

export default SuperMyPostsContainer;