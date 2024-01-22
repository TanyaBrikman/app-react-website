import React from "react";



const UserItem = (props) => {

    return (
        <div>
            <div>
                {props.name}
            </div>
            <div>
                {props.age}
            </div>
            <div>
                {props.birthday}
            </div>
            <div> {props.location +',' + props.city}</div>
        </div>
    )
}

export default UserItem
