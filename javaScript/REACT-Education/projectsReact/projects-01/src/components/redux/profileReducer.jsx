const ADD_POST = "ADD_POST"
const TEXT_POST_UPDATE = "TEXTAREA_POST_UPDATE"

let profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newTextPost = {
                id: 2,
                message: state.textPostUpdate,
                likeCount: 37
            }
            state.postsArrow.push(newTextPost)
            state.textPostUpdate = ""
            return state

        case TEXT_POST_UPDATE:
            state.textPostUpdate = action.newTextPost
            return state

        default: return state
    }
}

export const addPostAction = () => ({ type: ADD_POST })
export const textPostUpdateAction = (text) => ({ type: TEXT_POST_UPDATE, newTextPost: text })

export default profileReducer