import classes from "./Dialogs.module.css";
import React from "react";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import { DialogsPropsType} from "./DialogsContainer";

const SecretDialogs: React.FC<DialogsPropsType> = (props) => {
    let DialogsDataMap =
        props.dialogsPage.DialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let MessageDataMap =
        props.dialogsPage.messagesData.map(m => <Message message={m.message} key={m.id} id={m.id}/>);
    let newMessageBody = props.dialogsPage.newMessageBody

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {DialogsDataMap}
            </div>
            <div className={classes.messages}>
                <div>{MessageDataMap}</div>
                <div>
                    <div>
                        <textarea
                            onChange={props.onNewMessageChange}
                            value={newMessageBody}
                            placeholder={"enter your message"}>{}</textarea></div>
                    <div>
                        <button onClick={props.onSendMessageClick}>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Dialogs = React.memo(SecretDialogs)
export default Dialogs;