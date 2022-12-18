import React from "react";
import UserPhoto from "../../assets/images/tako.jpg";

let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
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
                            <img src={u.photos.small? u.photos.small : UserPhoto} width={"100px"}/>
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
        </div>
    )
}

export default Users
