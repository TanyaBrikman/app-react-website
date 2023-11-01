import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: '15'},
    {id: 2, message: 'It\'s my first post', likesCount: '25'},
]

let dialogs = [
    {id: 1, name: 'Tanya'},
    {id: 2, name: 'Dima'},
    {id: 3, name: 'Nika'},
    {id: 4, name: 'Vadim'},

]

let messages = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How is your React?'},
    {id: 3, message: 'Hello'},
    {id: 4, message: ':)'},

]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>
);
