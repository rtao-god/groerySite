import React from 'react'
import Post from './Post'
import { addPostAction, textPostUpdateAction } from '../../redux/profileReducer'

let MyPosts = (props) => {
    let postsElement = props.postsArrow.map(element => <Post message={element.message} likeCount={element.likeCount} />)

    let refPost = React.createRef()

    let addPost = () => {
        props.dispatch(addPostAction ())
    }

    let textPostUpdate = () => {
        let text = refPost.current.value
        props.dispatch(textPostUpdateAction (text))
    }

    return (
        <div id="messages">

            <div id="getMessage">
                <textarea onChange={textPostUpdate} value={props.newTextPost} ref={refPost} maxLength={1000} />
                <button onClick={addPost}> Send </button>
            </div>

            {postsElement}

        </div>
    )
}

export default MyPosts