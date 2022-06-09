import React, {ChangeEvent, useEffect, useState} from "react";

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    },[props.status])

    const activateMode = () => {
        setEditMode(true)
    }
    const deactivateMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => setStatus(e.currentTarget.value)

    return (
        <div>
            {!editMode ?
                <div>
                    <b>Статус: </b><span onDoubleClick={activateMode}> {props.status || "--------"} </span>
                </div>
                :
                <div>
                    <input onChange={onStatusChange} onBlur={deactivateMode} value={status}></input>
                </div>

            }
        </div>
    )
}


export default ProfileStatusWithHooks;
