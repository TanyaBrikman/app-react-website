import React from "react"
import s from './FriendItem.module.css'
import {NavLink} from "react-router-dom";

const FriendItem = (props) => {
    let path = '/friend/' + props.id
    return (
        <div className={s.friendItem}>
            <img className={s.friendIcon} src={props.ava} alt=""/>
            <div className={s.item}>
                <NavLink to={path} className={({isActive}) => isActive ? s.activeLink : s.item}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default FriendItem
