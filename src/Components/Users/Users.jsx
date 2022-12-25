import React from "react";
import UserPhoto from "../../assets/images/tako.jpg";
import {NavLink} from "react-router-dom";

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
                              onClick={() => { props.onSetCurrentPage(p) }}>
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


                            <button disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => { props.followUnfollowUserTh(u.id, u.followed ? 'UnFollow' : 'Follow') }}>
                                {u.followed ? 'UnFollow' : 'Follow'}
                            </button>
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
