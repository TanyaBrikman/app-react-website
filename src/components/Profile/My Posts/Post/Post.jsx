import React from "react"
import s from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://images.unsplash.com/photo-1695937098745-a8092a006cbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'
                alt=""/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post