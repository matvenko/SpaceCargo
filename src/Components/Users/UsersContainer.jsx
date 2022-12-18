import React from "react";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleIsFetchingAC,
    unfollowAC
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";
import axios from "axios";
import preLoader from "../../assets/images/loader.svg"
import PreLoader from "../common/PreLoader";

class UsersComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onSetCurrentPage = (currentPage) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                console.log(response.data.items)
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return <>
            {
                this.props.isFetching
                    ? <PreLoader />
                    : <Users
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onSetCurrentPage={this.onSetCurrentPage}
                        users={this.props.users}
                        followUser={this.props.followUser}
                        unfollowUser={this.props.unfollowUser}
                        isFetching={this.props.isFetching}
                    />}

        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) =>{
            dispatch(followAC(userId))
        },
        unfollowUser: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        toggleIsFetching: (isFetchind) => {
            dispatch(toggleIsFetchingAC(isFetchind))
        }
    }
}



export default  connect(mapStateToProps, mapDispatchToProps)(UsersComponent)