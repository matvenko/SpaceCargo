import React from "react";
import Pagination from "../common/Pagination";
import User from "./User";

let Users = (props) => {
    return (
        <div>
            <Pagination currentPage={props.currentPage}
                        onSetCurrentPage={props.onSetCurrentPage}
                        totalItemsCount={props.totalItemsCount}
                        pageSize={props.pageSize}/>
            <div className={"usersTable"}>
                {
                    props.users.map(u => <User key={u.id}
                                               user={u}
                                               followingInProgress={props.followingInProgress}
                                               followUnfollowUserTh={props.followUnfollowUserTh}
                    />)
                }
            </div>
        </div>
    )
}

export default Users
