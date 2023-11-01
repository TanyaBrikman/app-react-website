import React from "react"
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://phonoteka.org/uploads/posts/2022-09/1663693457_4-phonoteka-org-p-fon-dlya-mangaliba-oboi-8.jpg"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava+ description
            </div>
        </div>
    )
}

export default ProfileInfo
