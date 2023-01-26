import React from "react";
import UserPhoto from "../../assets/images/tako.jpg";
import {NavLink} from "react-router-dom";

let Users = ({user, followingInProgress, followUnfollowUserTh}) => {
    return (
        <div className={"usersTableRow"}>
            <div>
                <NavLink to={"/ProfileContainer/" + user.id + ""}>
                    <img src={user.photos.small != null ? user.photos.small : UserPhoto} width={"100px"}/>
                </NavLink>


                <button disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            followUnfollowUserTh(user.id, user.followed ? 'UnFollow' : 'Follow')
                        }}>
                    {user.followed ? 'UnFollow' : 'Follow'}
                </button>
            </div>
            <div> {user.name} </div>
            <div> {user.status ? user.status : 'Beginner'} </div>
            <div> DELETE</div>
        </div>
    )

}

export default Users
