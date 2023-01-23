import React from "react";
import {
    followUnfollowUserTh,
    requestUsers,
    setCurrentPage,
    toggleFollowingProgress
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";
import PreLoader from "../common/PreLoader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersState
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onSetCurrentPage = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        this.props.requestUsers(currentPage, this.props.pageSize);
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
        users: getUsersState(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        followUnfollowUserTh,
        setCurrentPage,
        toggleFollowingProgress,
        requestUsers
    }))
    (UsersContainer)