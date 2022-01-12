import classes from "./Dialogs.module.css";
import React, {ChangeEvent} from "react";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, FormSubmitHandler, InjectedFormProps, reduxForm, SubmitHandler} from "redux-form";
import { Textarea } from "../Common/formControls/formControls";
import {maxLengthCreator, required} from "../../utils/validators";

const SecretDialogs: React.FC<DialogsPropsType> = (props) => {
    let state = props.dialogsPage
    let DialogsDataMap = state.DialogsData.map((d,id) => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let MessageDataMap = state.messagesData.map((m,id) => <Message message={m.message} key={m.id} id={m.id}/>);

    const addNewMessage = (value: any) => {
        props.onSendMessageClick(value.newMessageBody)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {DialogsDataMap}
            </div>
            <div className={classes.messages}>
                <div>{MessageDataMap}</div>
                <div>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

type FormDataType = {
    newMessageBody: string
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={'newMessageBody'}
                    placeholder={"enter your message"}
                    validate={[required,maxLength50]}
                />
                <div>
                    <button >send</button>
                </div>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataType>({form:"AddMessageForm"})(AddMessageForm)

const Dialogs = React.memo(SecretDialogs)
export default Dialogs;