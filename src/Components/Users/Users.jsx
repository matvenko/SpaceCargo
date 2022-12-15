import React from "react";

let Users = (props) => {

    let i = 0;

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 0,
                photoUrl: 'https://scontent.ftbs5-3.fna.fbcdn.net/v/t39.30808-6/296214445_6057050887644208_7643190642299341662_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=yE61G1xPo9IAX9LmwEC&_nc_ht=scontent.ftbs5-3.fna&oh=00_AfDdnlsI04JSxQ3mgdfDOcxYi_pKWn6cC5BIdItPPjQb0Q&oe=63A126A6',
                followed: true,
                fullName: 'Mate',
                status: 'Admin',
                location: {
                    city: 'Tbilisi',
                    country: 'Georgia'
                }
            },
            {
                id: 1,
                photoUrl: 'https://scontent.ftbs5-3.fna.fbcdn.net/v/t39.30808-6/296214445_6057050887644208_7643190642299341662_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=yE61G1xPo9IAX9LmwEC&_nc_ht=scontent.ftbs5-3.fna&oh=00_AfDdnlsI04JSxQ3mgdfDOcxYi_pKWn6cC5BIdItPPjQb0Q&oe=63A126A6',
                followed: false,
                fullName: 'Nino',
                status: 'User',
                location: {city: 'London', country: 'Britain'}
            },
            {
                id: 2,
                photoUrl: 'https://scontent.ftbs5-3.fna.fbcdn.net/v/t39.30808-6/296214445_6057050887644208_7643190642299341662_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=yE61G1xPo9IAX9LmwEC&_nc_ht=scontent.ftbs5-3.fna&oh=00_AfDdnlsI04JSxQ3mgdfDOcxYi_pKWn6cC5BIdItPPjQb0Q&oe=63A126A6',
                followed: true,
                fullName: 'Zura',
                status: 'Moderator',
                location: {city: 'New York', country: 'Usa'}
            }
        ])
    }

    return <div className={"usersTable"}>
        {
            props.users.map(u => <div key={u.id} className={"usersTableRow"}>
                <div>
                    <img src={u.photoUrl} width={"100px"}/>
                    {u.followed
                        ? <button onClick={() => props.unfollowUser(u.id)}> Unfollow</button>
                        : <button onClick={() => props.followUser(u.id)}> Follow</button>
                    }
                </div>
                <div> {u.fullName} </div>
                <div> {u.status} </div>
                <div> {u.location.city} </div>
                <div> {u.location.country} </div>
            </div>)
        }
    </div>
}

export default Users