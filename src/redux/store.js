import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        usersPage: {
            user: [
                {
                    name: 'Tanya',
                    age: '28',
                    location: 'Russia',
                    city: 'Novosibirsk',
                    birthday: '11.10.1995'

                }
            ]
        },

        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: '15'},
                {id: 2, message: 'It\'s my first post', likesCount: '25'},
            ],
            newPostText: ''
        },
        sidebarPage: {
            friends: [
                {
                    id: 1,
                    ava: 'https://images.unsplash.com/photo-1608097172838-f8094d967aa4?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    name: 'Dima'
                },
                {
                    id: 2,
                    ava: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    name: 'Nika'
                },
                {
                    id: 3,
                    ava: 'https://images.unsplash.com/photo-1583512603806-077998240c7a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8',
                    name: 'Vadim'
                },
                {
                    id: 4,
                    ava: 'https://images.unsplash.com/photo-1598134493202-9a02529d86bb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    name: 'Nikita'
                },
                {
                    id: 5,
                    ava: 'https://images.unsplash.com/photo-1598133893778-ed19656d6a4f?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    name: 'Olga'
                }
            ]
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    ava: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    name: 'Tanya'
                },
                {
                    id: 2,
                    ava: 'https://images.unsplash.com/photo-1608097172838-f8094d967aa4?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    name: 'Dima'
                },
                {
                    id: 3,
                    ava: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    name: 'Nika'
                },
                {
                    id: 4,
                    ava: 'https://images.unsplash.com/photo-1583512603806-077998240c7a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8',
                    name: 'Vadim'
                },
            ],
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How is your React?'},
                {id: 3, message: 'Hello'},
                {id: 4, message: ':)'},
            ],
            newMessageBody: '',
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)

        this._callSubscriber(this._state)
    }
}

window.store = store
export default store
