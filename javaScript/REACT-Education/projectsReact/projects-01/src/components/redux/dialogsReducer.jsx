const ADD_MESSAGE = "ADD_MESSAGE"
const TEXT_MESSAGE_UPDATE = "TEXTAREA_MESSAGE_UPDATE"

let dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newTextMessage = {
                id: 4,
                message: state.textMessageUpdate
            }
            state.userArrow.push(newTextMessage)
            state.textMessageUpdate = ""
            return state

        case TEXT_MESSAGE_UPDATE:
            state.textMessageUpdate = (action.newTextMessage)
            return state

        default: return state
    }
}

export const addMessageAction = () => ({ type: ADD_MESSAGE })
export const textMessageUpdateAction = (text) => ({ type: TEXT_MESSAGE_UPDATE, newTextMessage: text })

export default dialogsReducer