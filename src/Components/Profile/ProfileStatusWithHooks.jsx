import React, {useEffect, useState} from 'react';
import './profile.css'

const ProfileStatusWithHooks = (props) => {


    let [editMode, setEditMode] = useState(false);
    let [userStatus, setStatus] = useState(props.userStatus)

    useEffect( () => {
       setStatus(props.userStatus)
    },[props.userStatus]);

    const activeEditMode = () => {
        setEditMode(true);
    }
    const deActiveEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(userStatus)
    }

    const onStatusChange = (e) =>{
        setStatus(e.currentTarget.value);
    }

    return (
        <div className={"editableTitleContent"}>
            <form>
                {!editMode &&
                    <p onDoubleClick={() => activeEditMode()}> {props.userStatus || "No Status"} </p>
                }
                {editMode &&
                    <input type={"text"} onBlur={deActiveEditMode} onChange={onStatusChange}  autoFocus={true} value={userStatus}/>
                }
            </form>

        </div>
    );
}


export default ProfileStatusWithHooks