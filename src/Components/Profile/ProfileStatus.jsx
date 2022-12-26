import React from 'react';
import './profile.css'

class ProfileStatus extends React.Component {

    state = {
        editeMode: false
    }

    activeEditMode(){
        this.setState({
            editeMode: true
        })
    }

    deActiveEditMode(){
        this.setState({
            editeMode: false
        })
    }

    render() {
        return (
            <div className={"editableTitleContent"}>
                <form>
                    { this.state.editeMode
                        ? <input type={"text"} autoFocus={true} onBlur={()=>this.deActiveEditMode()} value={"Hello My Friends"} />
                        : <p onDoubleClick={() => this.activeEditMode()}> {this.props.status} </p> }
                </form>

            </div>
        );
    }
}


export default ProfileStatus