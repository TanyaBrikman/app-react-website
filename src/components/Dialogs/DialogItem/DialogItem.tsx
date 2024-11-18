import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../../types/types";

type PropsType = {
    id: number
    ava: string
    name: string
}

const DialogItem: React.FC<PropsType> = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialogItem}>
            <img className={s.dialogIcon} src={props.ava} alt=""/>
            <div className={s.item}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem
