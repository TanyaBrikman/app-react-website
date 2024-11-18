import React, {useEffect, useState} from "react"
import axios from "axios"
import Profile from "./Profile"
import {connect} from "react-redux"
import {setUserProfile} from "../../redux/profile-reducer"

nn

const ProfileContainer = (props) => {
    const [userProfile, setUserProfile] = useState({profile: null})

    useEffect(() => {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/32064`)
            .then(response => {
                    setUserProfile(response.data)
                }
            )

    }, [setUserProfile])

    return (
      <Profile  profile={userProfile.profile}/>
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})
export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)