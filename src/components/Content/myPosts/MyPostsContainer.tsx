import React, {ChangeEvent} from 'react';
import Post from '../Post/Post';
import classes from './MyPosts.module.css';
import {
    ActionsTypes,
    addPostActionCreator, newTextChangeActionCreator,
    ProfilePageType, StateType, StoreType
} from "../../Redux/state";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";

type PropsType = {
    store: StoreType
}


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
//             postDataMap={postDataMap}
//             profilePage={props.store.getState().ProfilePage}
//         />
//     )
// }

type MapDispatchToPropsType = {
    addPost: ()=> void
    newTextChangeHandler:(e: ChangeEvent<HTMLTextAreaElement>)=>void
}

let MapStateToProps = (state: AppStateType) => {
    return {
        postDataMap: state.ProfilePage.PostsData.map(p => (
            <Post message={p.message} id={p.id} likesCount={p.likesCount}/>)),
        profilePage: state.ProfilePage,
    }
}
let MapDispatchToProps = (dispatch:any):MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator(dispatch.addPost()))
        },
        newTextChangeHandler:(e) => {
            dispatch(newTextChangeActionCreator(e.currentTarget.value))
        }
    }
}

export const SuperMyPostsContainer: React.FC<PropsType> = connect(MapStateToProps,MapDispatchToProps)(MyPosts);

export default SuperMyPostsContainer;