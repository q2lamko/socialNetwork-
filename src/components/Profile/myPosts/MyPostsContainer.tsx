import React from "react";
import Post from "../Post/Post";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {addPostActionCreator} from "../../Redux/profile-reducer";
import {Dispatch} from "redux";

type MapDispatchToPropsType = {
    addPost: (newPost:string) => void
}

const MapStateToProps = (state: AppStateType) => {
    return {
        postDataMap: state.profilePage.PostsData.map(p => (
            <Post message={p.message} id={p.id} likesCount={p.likesCount} key={p.id}/>)),
        profilePage: state.profilePage,
    }
}

const MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPost) => {
            dispatch(addPostActionCreator(newPost))
        },
    }
}

export const SuperMyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts);

export default SuperMyPostsContainer;
