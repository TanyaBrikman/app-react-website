import React from "react"
import FriendItem from "./FriendItem/FriendItem";
import s from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {
    let state = props.sidebarPage
    let friendElement = state.friends.map(f => <FriendItem name={f.name} ava={f.ava} id={f.id}/>)

    let addFavoritesFriends = (friend) => {
        let arrayFriends = []
        for (let i = 0; i < 3; i++) {
            arrayFriends.push(friend[i])
        }
        return arrayFriends
    }

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/friends' className={({isActive}) => isActive ? s.activeLink : s.item}>Friends</NavLink>
            </div>
            <div className={s.friendsItem}>{addFavoritesFriends(friendElement)}</div>
        </nav>
    )
}

export default Sidebar
