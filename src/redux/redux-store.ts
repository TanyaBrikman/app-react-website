import {combineReducers, configureStore} from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import friendsReducer from "./friends-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer
})


type RootReducerType = typeof rootReducer

export type AppStoreType = ReturnType<RootReducerType>



export let store = configureStore({
   reducer: rootReducer
})


// @ts-ignore
window.store = store

export default store