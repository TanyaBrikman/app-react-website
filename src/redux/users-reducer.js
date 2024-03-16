const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.userId) {
                        return {...users, followed: true}
                    }
                    return users
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.userId) {
                        return {...users, followed: false}
                    }
                    return users
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET_USERS_TOTAL_COUNT:
            return {
                ...state,
                currentPage: action.count
            }

        default:
            return state
    }
}

export const followAc = (userId) => ({type: FOLLOW, userId})
export const unfollowAc = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAc = (users) => ({type: SET_USERS, users})
export const setCurrentPageAc = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage}) //или просто currentPage
export const setUsersTotalCountAc = (totalUsersCount) => ({type: SET_USERS_TOTAL_COUNT, count: totalUsersCount})

export default usersReducer
