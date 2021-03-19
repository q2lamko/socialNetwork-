import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'

type MessegeType = {
    name: string;
    id: number;
}


const DialogItem: React.FC<MessegeType> = (props) => {
    console.log(props)
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialogItem}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Messege = (props: any) => {

    return (
        <div className={classes.messege}>
            {props.messege}
        </div>
    )
}

const Dialogs = (props: any) => {

    let dialogsData = [
        { id: 1, name: 'Maxim' },
        { id: 2, name: 'Lena' },
        { id: 3, name: 'Gu' },
    ]

    let messegeData = [
        { id: 1, messege: 'Hello' },
        { id: 2, messege: 'Privet' },
        { id: 3, messege: 'Shalom' },
        { id: 4, messege: 'hey' },
    ]

    let DialogsDataMap = dialogsData
        .map(dialog => (< DialogItem name={dialog.name} id={dialog.id} />));
        
    let MessegeDataMap = messegeData
        .map(messege => (<Messege messege={messege.messege} id={messege.id} />));


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {DialogsDataMap}
            </div>
            <div className={classes.messeges}>
                {MessegeDataMap}
            </div>
        </div>
    )
}

export default Dialogs;