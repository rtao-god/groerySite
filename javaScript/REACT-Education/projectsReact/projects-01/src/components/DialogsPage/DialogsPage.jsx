import React from 'react'
import Dialogs from './Dialogs'

let DialogsPage = (props) => {
    return (
        <div>
            <Dialogs userArrow={props.userArrow} nameItem={props.nameItem} dispatch={props.dispatch} />
        </div>
    )
}

export default DialogsPage