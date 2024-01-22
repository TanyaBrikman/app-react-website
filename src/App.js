import React from 'react'
import './App.css'
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import FriendsContainer from "./components/Sidebar/Friends/FriendsContainer";

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <div className='box'>
                <Navbar/>
                <SidebarContainer/>
            </div>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile'
                           element={<Profile/>}/>
                    <Route path='/dialogs'
                           element={<DialogsContainer/>}/>
                    <Route path='/friends'
                           element={<FriendsContainer/>}/>
                    <Route path='/news'
                           element={<News/>}/>
                    <Route path='/music'
                           element={<Music/>}/>
                    <Route path='/setting'
                           element={<Setting/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App
