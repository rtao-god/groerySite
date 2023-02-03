import React from 'react'

let Post = (props) => {
    const photoAvatar = "https://i.pinimg.com/236x/d7/03/51/d7035179fcefd2fc22796a014fe33640.jpg"
    const photoLike = "https://spng.pngfind.com/pngs/s/218-2187925_free-png-hand-drawn-heart-png-image-with.png"

    return (
        <div className='post'>
            <div>
                <img src={photoAvatar} alt="photoAvatar" />

                <div className="likes">
                    <img src={photoLike} alt="photoLike" />
                    {props.likeCount}
                </div>
            </div>

            <p> {props.message} </p>
 
        </div>
    )
}

export default Post