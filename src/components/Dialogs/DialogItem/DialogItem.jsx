import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={`${s.dialog}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
// const DialogItem = (props) => {
//     return (
//         <div className={s.dialogItem}>
//             <NavLink to={props.id.toString()}>{props.name}</NavLink>
//         </div>
//     );
// }

export default DialogItem