import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage
    let dialogsElements = state.dialogs.map(dialog => <DialogItem ava={dialog.ava} name={dialog.name} id={dialog.id}/>)
    let messagesElement = state.messages.map(message => <Message message={message.message}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageCLick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <div>
                    <textarea value={newMessageBody}
                              onChange={onNewMessageChange}
                              placeholder='Enter your message'/>
                </div>
                <div>
                    <button onClick={onSendMessageCLick}>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
