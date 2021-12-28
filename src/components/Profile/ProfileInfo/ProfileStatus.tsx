import React from 'react';

type profileStatusType = {
    status: string
}


class ProfileStatus extends React.Component<profileStatusType> {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        // console.log(this.state.editMode) выведет false
        this.setState({
            editMode : true
        })
        // console.log(this.state.editMode)  так же выведет false, т.к. запрос через
    //    this.setState асинхронный и поменяет значение после выполнения всего activateMode
    }
    inActivateEditMode = () => {
        this.setState({
            editMode : false
        })

    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                < div>
                    < span onDoubleClick={this.activateEditMode.bind(this)}> {this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.inActivateEditMode.bind(this)} value={this.props.status}/>
                </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;