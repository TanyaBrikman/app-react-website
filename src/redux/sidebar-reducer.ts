import {FriendsType} from "../types/types";

const SET_FAVORITES_FRIENDS = 'SET_FAVORITES_FRIENDS'




let initialState = {
    friends: [] as Array<FriendsType>
}

export type InitialStateType = typeof initialState

const sidebarReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_FAVORITES_FRIENDS:
            return {
                ...state,
                friends: action.friends
            }
        default:
            return state
    }
}

type SetFavoritesFriendsActionCreator = {
    type: typeof SET_FAVORITES_FRIENDS
    friends: string
}

export const setFavoritesFriendsAc = (friends: string): SetFavoritesFriendsActionCreator => ({type: SET_FAVORITES_FRIENDS, friends})

export default sidebarReducer
