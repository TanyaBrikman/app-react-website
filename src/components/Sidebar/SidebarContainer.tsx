import React from "react"
import Sidebar from "./Sidebar";
import {connect} from "react-redux";
import {setFavoritesFriendsAc} from "../../redux/sidebar-reducer";

let mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setFavoritesFriends: (friends) => {
            dispatch(setFavoritesFriendsAc(friends))
        }
    }
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)

export default SidebarContainer
