import React from 'react'
import MyPost from './MyPost'
import $ from 'jquery'



const Posts = (props) => {
    return (
        <div id="messages">

            {/* <div className='post'>

                <div>
                    <img src="https://i.pinimg.com/236x/d7/03/51/d7035179fcefd2fc22796a014fe33640.jpg" alt="avatar" />

                    <div className="likes">
                        <img onClick={likeCountFunction} src="https://i.pinimg.com/564x/09/8f/ab/098fab05a26155505a5e3fd17b04644e.jpg" alt="likes"></img>
                        <MyPost likeCount="5654" />
                    </div>
                </div>

                <p> uri ex voluptatum repudiandae ratione.</p>

            </div>


            <div className='post'>

                <div>
                    <img src="https://i.pinimg.com/236x/d7/03/51/d7035179fcefd2fc22796a014fe33640.jpg" alt="avatar" />

                    <div className="likes">
                        <img src=" https://spng.pngfind.com/pngs/s/218-2187925_free-png-hand-drawn-heart-png-image-with.png" alt="likes"></img>
                        <MyPost likeCount="5654565" />
                    </div>
                </div>

                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia in, laudantium omnis magnam voluptate explicabo numquam ullam quas obcaecati? Reprehenderit labore quo laboriosam atque quaerat ab earum sequi sit numquam Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem beatae officia eum molestias recusandae. Non similique architecto deserunt iure reiciendis fuga accusantium, eveniet itaque placeat excepturi ex voluptatum repudiandae ratione.</p>

            </div>

 */}
            <div className='post'>

                <div className='box'>
                    <img src="https://i.pinimg.com/236x/d7/03/51/d7035179fcefd2fc22796a014fe33640.jpg" alt="avatar" />

                    <div className="likes">
                        <img src="https://png.pngtree.com/png-vector/20201215/ourlarge/pngtree-beautiful-single-pink-neon-heart-on-transparent-png-image_2564487.jpg" alt="likes"></img>
                        <MyPost likeCount="5654564544" />
                    </div>
                </div>

                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe error ducimus dolorem nam, porro dolor harum consequatur quasi vel? Unde, consectetur enim perferendis doloribus ducimus accusantium quae. Nobis, eius eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi atque ratione ipsam blanditiis. Sit perspiciatis alias sapiente placeat incidunt quisquam aliquam tempora modi officiis vitae, fugiat, vel minima. Totam, nam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae omnis facilis assumenda quas, illo itaque voluptatum soluta? Magni pariatur eveniet dolorem et voluptate laudantium, asperiores eius quae. Eveniet, suscipit unde?   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia in, laudantium omnis magnam voluptate explicabo numquam ullam quas obcaecati? Reprehenderit labore quo laboriosam atque quaerat ab earum sequi sit numquam Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem beatae officia eum molestias recusandae. Non similique architecto deserunt iure reiciendis fuga accusantium, eveniet itaque placeat excepturi ex voluptatum repudiandae ratione.</p>

            </div>

        </div>

    )
}

function likeCountFunction () {
    
    // let clickHere = document.addEventListener('click', element => console.log(element.target))
    /* console.log(clickHere)
    clickHere.classList.add = "clickHere"
     */

  /*   console.log($(".likes div").css({
        "color" : "red"
    })) */

    /* likeCount = $(".likes div").html()
    likeCount++
    $(".likes div").html(likeCount) */

}
// $(".likes div").click(likeCountFunction ())

    


export default Posts










