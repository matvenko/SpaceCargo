import React from "react";
import {
    followUnfollowUserTh,
    getUsers,
    setCurrentPage,
    toggleFollowingProgress
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";
import PreLoader from "../common/PreLoader";

class UsersComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onSetCurrentPage = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        this.props.getUsers(currentPage, this.props.pageSize);
    }

    render() {
        return <>
            {
                this.props.isFetching
                    ? <PreLoader/>
                    : <Users
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onSetCurrentPage={this.onSetCurrentPage}
                        users={this.props.users}
                        followUnfollowUserTh={this.props.followUnfollowUserTh}
                        isFetching={this.props.isFetching}
                        toggleIsFetching={this.props.toggleIsFetching}
                        followingInProgress={this.props.followingInProgress}
                        isAuth={this.props.isAuth}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {
    followUnfollowUserTh,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers: getUsers,
})(UsersComponent)