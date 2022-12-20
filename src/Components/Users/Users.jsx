import React from "react";
import UserPhoto from "../../assets/images/tako.jpg";
import {NavLink} from "react-router-dom";
import {userAPI} from "../api/api";

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
                              onClick={() => {
                                  props.onSetCurrentPage(p)
                              }}>
                            {p}
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
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id);
                                    userAPI.axUnFollowUser(u.id).then(data => {
                                        props.toggleIsFetching(false)
                                        if (data.resultCode == 0) {
                                            props.unfollowUser(u.id)
                                        }
                                        props.toggleFollowingProgress(false, u.id);
                                    });
                                }
                                }> Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id);
                                    userAPI.axFollowUser(u.id).then(data => {
                                        props.toggleIsFetching(false)
                                        if (data.resultCode == 0) {
                                            props.followUser(u.id)
                                        }
                                        props.toggleFollowingProgress(false, u.id);
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
