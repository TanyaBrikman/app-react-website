import React, {useEffect, useState} from "react"
import {connect} from "react-redux"
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reducer"
import axios from "axios"
import Users from "./Users"
import Preloader from "../common/Preloader/Preloader"
import {AppStoreType} from "../../redux/redux-store";

type PropsType = {

}

const UsersContainer: React.FC<PropsType> = (props) => {

    const [toggleIsFetching, setUsers] = useState({toggleIsFetching: true})

    useEffect(()=> {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                setUsers(response.data.items)
                setUsersTotalCount(response.data.totalCount)
            })
    })



    //
    // onPageChanged = (pageNumber) => {
    //     this.props.toggleIsFetching(true)
    //     this.props.setCurrentPage(pageNumber)
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    //         .then(response => {
    //             this.props.toggleIsFetching(false)
    //             this.props.setUsers(response.data.items)
    //         })
    // }
    //
    // render() {
    //     return <>
    //         {this.props.isFetching ? <Preloader/> : null}
    //         <Users totalUsersCount={this.props.totalUsersCount}
    //                pageSize={this.props.pageSize}
    //                currentPage={this.props.currentPage}
    //                onPageChanged={this.onPageChanged}
    //                users={this.props.users}
    //                follow={this.props.follow}
    //                unfollow={this.props.unfollow}
    //         />
    //     </>
    // }
}

let mapStateToProps = (state: AppStoreType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {follow, setCurrentPage, setUsers, setUsersTotalCount, toggleIsFetching, unfollow}
)(UsersContainer)

