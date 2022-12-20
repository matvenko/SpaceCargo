import React from "react";
import UserPhoto from "../../assets/images/tako.jpg";
import {NavLink} from "react-router-dom";
import axios from "axios";

let Users = (props) => {

    // let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pageCount = 40;
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div className={"pagination"}>
                {
                    pages.map(p =>
                        <span key={p} className={props.currentPage === p ? "selectedPage" : ''}
                              onClick={() => {props.onSetCurrentPage(p)}}>
                            { p }
                        </span>
                    )
                }

            </div>
            <div className={"usersTable"}>
                {

                    props.users.map(u => <div key={u.id} className={"usersTableRow"}>
                        <div>
                            <NavLink to={"/Profile/" + u.id + ""}>
                                <img src={u.photos.small != null ? u.photos.small : UserPhoto} width={"100px"}/>
                            </NavLink>

                            {u.followed
                                ? <button onClick={() =>{
                                    props.toggleIsFetching(true);
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                        withCredentials: true
                                    }).then(response => {
                                            props.toggleIsFetching(false)
                                            if(response.data.resultCode == 0){
                                                props.unfollowUser(u.id)
                                            }
                                        });
                                    }
                                }> Unfollow</button>
                                : <button onClick={() =>
                                {
                                    props.toggleIsFetching(true);
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true
                                    }).then(response => {
                                        props.toggleIsFetching(false)
                                            if(response.data.resultCode == 0){
                                                props.followUser(u.id)
                                            }
                                        });
                                   }
                                }> Follow</button>
                            }
                        </div>
                        <div> {u.name} </div>
                        <div> {u.status ? u.status : 'Beginner'} </div>
                        <div> DELETE</div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Users
