import React from "react";
import s from "./../Dialogs.module.css"
import {MessageType} from "../DialogsContainer";


const Message: React.FC<MessageType> = (props) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        let text = newPostElement.current?.value;
        alert(text)
    }

    return (
        <div className={s.message}>
            {props.message}
            {/*<div>*/}
            {/*    <textarea ref={newPostElement}></textarea>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <button onClick={addPost}>Добавить</button>*/}
            {/*</div>*/}
        </div>
    )
}

export default Message;
