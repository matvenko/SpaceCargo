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
    getUsersSelector
} from "../../redux/users-selectors";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {

    componentDidMount() {
        let {requestUsers, currentPage, pageSize} = this.props
        requestUsers(currentPage, pageSize);
    }

    onSetCurrentPage = (currentPage) => {
        let {setCurrentPage, requestUsers, pageSize} = this.props
        setCurrentPage(currentPage);
        requestUsers(currentPage, pageSize);
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
        users: getUsersSelector(state),
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
    }), withAuthRedirect)
(UsersContainer)
