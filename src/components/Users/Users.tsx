import React from "react"
import s from "./Users.module.css"
import userPhoto from "../../assets/images/unknownUserMan.png"
import {NavLink} from "react-router-dom";
import {UserType} from "../../types/types";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    onPageChanged: (page: number) => void
    follow(id: number): void
    unfollow(id: number): void;

}

let Users: React.FC<PropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(page => {
                return <span className={props.currentPage === page && s.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(page)
                             }}>{page}</span>
            })}
        </div>
        {
            props.users.map(users => <div key={users.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + users.id}>
                        <img src={users.photos.small != null ? users.photos.small : userPhoto} className={s.userPhoto}/>
                    </NavLink>
                        </div>
                    <div>
                        {users.followed
                            ? <button onClick={() => {
                                props.unfollow(users.id)
                            }}>Unfollow </button>
                            : <button onClick={() => {
                                props.follow(users.id)
                            }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{users.name}</div>
                        <div>{users.status}</div>
                    </span>
                    <span>
                        <div>{'users.location.country'}</div>
                        <div>{'users.location.city'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users
