import React from 'react'
import Friends from "./Friends";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        sidebarPage: state.sidebarPage
    }
}

const FriendsContainer = connect(mapStateToProps)(Friends)

export default FriendsContainer
