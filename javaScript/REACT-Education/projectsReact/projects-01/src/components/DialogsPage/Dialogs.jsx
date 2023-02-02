import React from 'react'
import { addMessageAction, textMessageUpdateAction } from '../redux/dialogsReducer'
import User from './User'
import { NavLink } from 'react-router-dom'

let Dialogs = (props) => {

    let messageElement = props.userArrow.map(element => <User message={element.message} />)

    let DialogsItem = (props) => {
        let path = "/dialogs/" + props.id

        return <NavLink to={path}> {props.name} </NavLink>
    }

    let nameItemElement = props.nameItem.map(element =>
        <li>
            <DialogsItem id={element.id} name={element.name} />
        </li>
    )

    let refMessage = React.createRef()

    let addMessage = () => {
        props.dispatch(( addMessageAction () ))
    }

    let textMessageUpdate = () => {
        let text = refMessage.current.value
        props.dispatch(textMessageUpdateAction(text))
    }

    return (
        <div id="dialogs">
            <ul id="user">
                <p> DIALOGS: </p>
                {nameItemElement}
                {messageElement}
            </ul>

            <div id="verticalLine"> </div>

            <div id="sending">
                <textarea ref={refMessage} value={props.newTextMessage} onChange={textMessageUpdate} maxLength={1000} />
                <button onClick={addMessage}> Send message </button>
            </div>
        </div>
    )

}

export default Dialogs