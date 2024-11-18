import React from "react"
import FriendItem from "./Friends/FriendItem/FriendItem";
import s from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";
import {FriendsType} from "../../types/types";

type PropsType = {
    friends: Array <FriendsType>

}

const Sidebar: React.FC<PropsType> = (props) => {
    // if (props.friends.length === 0) {
    //     props.setFavoritesFriends([
    //         {
    //             id: 1,
    //             ava: 'https://images.unsplash.com/photo-1608097172838-f8094d967aa4?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //             name: 'Dima'
    //         },
    //         {
    //             id: 2,
    //             ava: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //             name: 'Nika'
    //         },
    //         {
    //             id: 3,
    //             ava: 'https://images.unsplash.com/photo-1583512603806-077998240c7a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8',
    //             name: 'Vadim'
    //         },
    //         {
    //             id: 4,
    //             ava: 'https://images.unsplash.com/photo-1598134493202-9a02529d86bb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //             name: 'Nikita'
    //         },
    //         {
    //             id: 5,
    //             ava: 'https://images.unsplash.com/photo-1598133893778-ed19656d6a4f?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //             name: 'Maxim'
    //         }
    //     ])
    // }

    let element = props.friends.map(f => <FriendItem name={f.name} ava={f.ava} key={f.id} id={f.id}/>)

    let addFavoritesFriends = (friend: any) => {
        let arrFriendsFavorites = []
        for (let i = 0; i < 3; i++) {
            arrFriendsFavorites.push(friend[i])
        }
        return arrFriendsFavorites
    }


    return <div>
                <nav className={s.nav}>
                    <div className={s.item}>
                        <NavLink to='/friends'
                                 className={({isActive}) => isActive ? s.activeLink : s.item}>Friends</NavLink>
                    </div>
                    <div className={s.friendsItem}>
                        {
                            addFavoritesFriends(element)
                        }
                    </div>
                </nav>
    </div>
}

export default Sidebar
