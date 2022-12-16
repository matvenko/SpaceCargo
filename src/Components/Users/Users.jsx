import React from "react";
import UserPhoto from '../../assets/images/tako.jpg'
import axios from "axios";

let Users = (props) => {

    let getUsers = () => {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    console.log(response.data.items)
                    props.setUsers(response.data.items)
                })
    }

    return <div className={"usersTable"}>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id} className={"usersTableRow"}>
                <div>
                    <img src={u.photoUrl ? u.photoUrl : UserPhoto} width={"100px"}/>
                    {u.followed
                        ? <button onClick={() => props.unfollowUser(u.id)}> Unfollow</button>
                        : <button onClick={() => props.followUser(u.id)}> Follow</button>
                    }
                </div>
                <div> {u.name} </div>
                <div> {u.status ? u.status : 'Beginner'} </div>
                <div> DELETE</div>
            </div>)
        }
    </div>
}

export default Users