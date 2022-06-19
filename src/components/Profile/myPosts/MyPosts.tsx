import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../Common/formControls/formControls";
import {PostType} from "../../Redux/profile-reducer";
import Post from "../Post/Post";

export type MapPropsType = {
    posts: Array<PostType>
}
export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}

export const MyPosts: React.FC<MapPropsType & DispatchPropsType> = React.memo((props) => {

    console.log("myPosts rendered")
    let postsElements =
        [...props.posts]
            .reverse()
            .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    const addNewPost = (value: FormDataType) => {
        props.addPost(value.newPost)
    }

    return (
        <>
            <div>
                <div>
                    {postsElements}
                </div>
            </div>
            <div>
                <MyPostFormRedux onSubmit={addNewPost}/>
            </div>
        </>
    )
});

type FormDataType = {
    newPost: string
}
const maxLength10 = maxLengthCreator(10)
const MyPostsForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name={"newPost"}
                placeholder={"enter your message"}
                validate={[required, maxLength10]}
            />
            <div>
                <button>push the button</button>
            </div>

        </form>
    )
};

const MyPostFormRedux = reduxForm<FormDataType>({form: "profileAddNewPostForm"})(MyPostsForm)



export default MyPosts;
