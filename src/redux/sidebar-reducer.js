const SET_FAVORITES_FRIENDS = 'SET_FAVORITES_FRIENDS'


let initialState = {
    friends: []
}

const sidebarReducer = (state = initialState, action) => {
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

export const setFavoritesFriendsAc = (friends) => ({type: SET_FAVORITES_FRIENDS, friends})

export default sidebarReducer
