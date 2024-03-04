import React from 'react'
import s from "./Friends.module.css"
import FriendItem from "./FriendItem/FriendItem";

const Friends = (props) => {

    let friendsElement = props.friends.map(f => <FriendItem name={f.name} ava={f.ava} id={f.id}/>)

    return (
        <div className={s.friendItem}>
            My friends:
            <div className={s.item}>{friendsElement}</div>
        </div>
    )
}

export default Friends