import {PostType, ProfileType} from "../types/types";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: '15'},
        {id: 2, message: 'It\'s my first post', likesCount: '25'},
    ] as Array<PostType>,
    newPostText: '',
    profile: null as ProfileType | null
}
export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: '0'
            }
            return <InitialStateType>{
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

type AddPostActionCreator = {
    type: typeof ADD_POST
}

type UpdateNewPostTextActionCreator = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}

type SetUserProfileActionCreator = {
    type: typeof SET_USER_PROFILE
    profile: any
}

export const addPost = (): AddPostActionCreator =>
    ({type: ADD_POST})
export const updateNewPostText = (text: string): UpdateNewPostTextActionCreator =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile: any): SetUserProfileActionCreator => (
    {type: SET_USER_PROFILE, profile})

export default profileReducer
