import React from 'react'
import { NavLink } from 'react-router-dom'

let Dialogs = (props) => {

    let DialogsItem = (props) => {

        let path = "/dialogs/" + props.id

        return (   
            <NavLink to={path}> {props.name} </NavLink>
        )
    }

    const nameItem = [
        { id: 1, name: 'Sveta' },
        { id: 2, name: 'Dima' },
        { id: 3, name: 'hi okli' },
        { id: 4, name: 'hi ujy' },
        { id: 5, name: 'Lololoshka' },
        { id: 6, name: 'higfd' },
        { id: 7, name: 'Sveta' },
        { id: 8, name: 'Dima' },
        { id: 9, name: 'hi okli' },
        { id: 10, name: 'hi ujy' }
    ]

    const messageItem = [
        { id: 1, message: 'hi' },
        { id: 2, message: 'hi lol' },
        { id: 3, message: 'hi okli' },
        { id: 4, message: 'hi ujy' },
        { id: 5, message: 'hi tg' },
        { id: 6, message: 'higfd' },
    ]

    let nameItemElement = nameItem.map(element =>
        <div>
            <li>
                <DialogsItem name={element.name} id={element.id} />
            </li>

        </div>
    )

    let messageItemElement = messageItem.map(element =>
        <div>
            <ul id="messages">
                <li>
                    <DialogsItem name={element.message} id={element.id} />
                </li>
            </ul>
        </div>
    )


    const photoArrow = "http://s3.thingpic.com/images/ry/uaSTmPPcBxs1c8SsZMHAx2m6.png"

    return (

        <div id="dialogs">

            <ul id="name">
                <p> DIALOGS: </p>
                {nameItemElement}
            </ul>

            <div id="verticalLine"></div>

            <div id="allSmilies">
                <img src={photoArrow} />
                <img src={photoArrow} />
                <img src={photoArrow} />
                <img src={photoArrow} />
                <img src={photoArrow} />
                <img src={photoArrow} />
            </div>

            <ul id="messeges">
                {messageItemElement}
            </ul>

        </div>
    )
}

export default Dialogs