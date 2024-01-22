import React from "react";
import s from './ProfileInfo.module.css'
import Users from "../../Users/Users";

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.backgroundBlock}>
                <img
                    src="https://img.freepik.com/free-vector/night-forest-background-with-green-fireflies-glowing-in-darkness-vector-cartoon-illustration-of-dark-landscape-with-old-trees-bushes-and-grass-magic-lights-sparkling-in-air-moonlight-beam_107791-21766.jpg?w=1380&t=st=1702452222~exp=1702452822~hmac=f5b83ecfd8cb9e4dc7963b4ceaa3cd146dd484da5a23398003b8a053907d3bef"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.avatarIcon}>
                    <img src="https://img.freepik.com/free-photo/world-animal-day-celebration-with-cute-dog_23-2149477527.jpg?w=740&t=st=1702454323~exp=1702454923~hmac=67931d6ba6f6a69541bcf8a3a50fbaee6990d8eab719aac11b9fb5ab8cfac160" alt=""/>
                </div>
                <div className={s.descripterBlock}>

                </div>
            </div>
        </div>
    )
}

export default ProfileInfo

