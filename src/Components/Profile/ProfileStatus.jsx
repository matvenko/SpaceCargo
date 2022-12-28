import React from 'react';
import './profile.css'

class ProfileStatus extends React.Component {

    state = {
        editeMode: false,
        status: this.props.userStatus
    }

    activeEditMode = () =>{
        this.setState({
            editeMode: true
        })
    }

    deActiveEditMode = () =>{
        this.setState({
            editeMode: false
        });
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e) =>{
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div className={"editableTitleContent"}>
                <form>
                    { this.state.editeMode
                        ? <input type={"text"} onChange={this.onStatusChange} autoFocus={true} onBlur={()=>this.deActiveEditMode()} value={this.state.status} />
                        : <p onDoubleClick={() => this.activeEditMode()}> {this.props.userStatus || "No Status"} </p> }
                </form>

            </div>
        );
    }
}


export default ProfileStatus