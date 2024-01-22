import React from "react"
import Sidebar from "./Sidebar";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        sidebarPage: state.sidebarPage
    }
}

const SidebarContainer = connect(mapStateToProps)(Sidebar)

export default SidebarContainer
