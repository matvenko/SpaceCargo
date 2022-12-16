import React from "react";
import UserPhoto from '../../assets/images/tako.jpg'
import axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onSetCurrentPage = (currentPage) => {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                console.log(response.data.items)
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

        return <div>
            <div className={"pagination"}>
                {
                    pages.map(p =>
                        <span key={p} className={this.props.currentPage === p ? "selectedPage" : ''}
                              onClick={() => {this.onSetCurrentPage(p)}}>
                            { p }
                        </span>
                    )
                }

            </div>
            <div className={"usersTable"}>
                {
                    this.props.users.map(u => <div key={u.id} className={"usersTableRow"}>
                        <div>
                            <img src={u.photos.small? u.photos.small : UserPhoto} width={"100px"}/>
                            {u.followed
                                ? <button onClick={() => this.props.unfollowUser(u.id)}> Unfollow</button>
                                : <button onClick={() => this.props.followUser(u.id)}> Follow</button>
                            }
                        </div>
                        <div> {u.name} </div>
                        <div> {u.status ? u.status : 'Beginner'} </div>
                        <div> DELETE</div>
                    </div>)
                }
            </div>
        </div>
    }
}

export default Users