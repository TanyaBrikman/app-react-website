import React from "react";
import s from './Users.module.css'
import UserItem from "./UserItem";

const Users = (props) => {
    let usersElement = props.state.usersPage.user.map(user => <UserItem name={user.name}
                                                                        age={user.age}
                                                                        birthday={user.birthday}
                                                                        location={user.location}
                                                                        city={user.city}/>)
    return (
        <div className={s.info}>
            {usersElement}
        </div>
    )
}

export default Users
