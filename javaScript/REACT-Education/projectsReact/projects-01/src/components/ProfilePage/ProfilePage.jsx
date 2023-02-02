import React from 'react'
import ProfileInfo from './ProfileInfo'
import MyPosts from './Post/MyPosts'

let ProfilePage = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsArrow={props.postsArrow} dispatch={props.dispatch} />
        </div>
    )
} 

export default ProfilePage
