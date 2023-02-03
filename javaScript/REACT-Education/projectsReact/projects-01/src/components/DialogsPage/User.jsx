import React from 'react'

let User = (props) => {

    const photoAvatar = "http://s3.thingpic.com/images/ry/uaSTmPPcBxs1c8SsZMHAx2m6.png"

    return (
        <div id="user">
            <img src={photoAvatar} alt="photoAvatar" />
            <p> {props.name} </p>
            <p> {props.message} </p>
        </div>
    )
}

export default User 