import React from "react"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My Posts/Post/MyPostsContainer";
import {ProfileType} from "../../types/types";

type PropsType = {
    profile: any
}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile
