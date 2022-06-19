import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {actions, PostType} from "../../Redux/profile-reducer";

type MapDispatchToPropsType = {
    addPost: (newPost: string) => void
}
export type MapPropsType = {
    posts: Array<PostType>
}

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.PostsData,
    }
}

const MyPostsContainer = connect<MapPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    addPost: actions.addPostActionCreator
})(MyPosts);

export default MyPostsContainer;
