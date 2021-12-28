import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../Common/formControls/formControls";

export const MyPosts: React.FC<PropsType> = (props) => {
    const addNewPost = (value: any) => {
        props.addPost(value.newPost)
    }
    return (
        <>
            <div>
                <div >
                    {props.postDataMap}
                </div>
            </div>
            <div>
                <MyPostFormRedux onSubmit={addNewPost}/>
            </div>
        </>
    )
}

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


type PropsType = {
    addPost: (newPost: string) => void
    postDataMap: JSX.Element[]
}


// const MyPosts: React.FC<PropsType> = (props) => {
//     const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//         props.newTextChangeHandler(e.currentTarget.value)
//     }
//     return (
//         <div className={classes.PostWrapper}>
//             <h2>post</h2>
//             <div>
//                 <div>
//                     <textarea className={classes.textarea}
//                               onChange={onChangeText}
//                               value={props.profilePage.newPostText}/>
//                 </div>
//                 <div>
//                     <button className={classes.btn}
//                             onClick={props.addPost}
//                     >
//                         Добавить
//                     </button>
//                 </div>
//             </div>
//             <div className={classes.post_data}>
//                 {props.postDataMap}
//             </div>
//
//         </div>
//     )
// }


export default MyPosts;