import React, {ChangeEvent, useState} from "react";

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<PropsType, any> {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateMode = () => {
        this.setState({
            editMode: true
        });
    }
    deactivateMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })

    }
    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<any>, snapshot?: any) {
       if (prevProps.status !== this.props.status) {
           this.setState({
               status:this.props.status
           })
       }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateMode}>{this.props.status || "--------"} </span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} onBlur={this.deactivateMode} value={this.state.status}/>
                </div>
                }
            </div>
        )
    }

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

export default ProfileStatus;
