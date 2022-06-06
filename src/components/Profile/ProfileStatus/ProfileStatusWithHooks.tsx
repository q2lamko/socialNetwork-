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
                    <span onDoubleClick={activateMode}> {props.status || "--------"} </span>
                </div>
                :
                <div>
                    <input onChange={onStatusChange} onBlur={deactivateMode} value={status}></input>
                </div>

            }
        </div>
    )
}

// const ProfileStatus = React.memo((props: PropsType) => {
//
//     const [edit, setEdit] = useState(false);
//     const [value, setValue] = useState('')
//
//     const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
//     const viewModeHandler = () => setEdit(false)
//
//
//     return (
//         <> {edit ?
//             <div>
//                 <input
//                     onChange={onChangeHandler}
//                     autoFocus
//                     value={value}
//                     onBlur={viewModeHandler}
//                 />
//             </div>
//             :
//             <div>
//                 <span onClick={() => setEdit(true)}>{props.status}</span>
//                 <span onClick={() => setEdit(true)}>{value}</span>
//             </div>
//         }
//
//         </>
//
//     );
// });

export default ProfileStatusWithHooks;
