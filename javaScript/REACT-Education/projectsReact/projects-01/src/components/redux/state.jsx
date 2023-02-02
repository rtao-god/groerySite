import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import sidebarReducer from "./sidebarReducer"

let store = {
    _state: {
        profilePage: {
            postsArrow: [
                { id: 1, message: "123", likeCount: 1235 },
            ],

            textPostUpdate: ""
        },

        dialogsPage: {
            nameItem: [
                { id: 1, name: 'Sveta' },
                { id: 2, name: 'Dima' },
                { id: 3, name: 'hi okli' },
                { id: 4, name: 'hi ujy' },
                { id: 5, name: 'Lololoshka' },
                { id: 6, name: 'higfd' },
                { id: 7, name: 'Sveta' },
                { id: 8, name: 'Dima' },
                { id: 9, name: 'hi okli' },
                { id: 10, name: 'hi ujy' },
            ],

            userArrow: [
                { id: 1, message: "1234" },
                { id: 2, message: "1235" },
                { id: 3, message: "1236" },
            ],

            textMessageUpdate: ""
        },

        sidebar: {

        }

    },

    getState() {
        return this._state
    },

    _renderTree() {
        console.log("lol")
    },

    addPost() {
        let newTextPost = {
            id: 2,
            message: this._state.profilePage.textPostUpdate,
            likeCount: 37
        }

        this._state.profilePage.postsArrow.push(newTextPost)
        this._state.profilePage.textPostUpdate = ""
        this._renderTree(this._state)
    },

    textPostUpdate(newTextPost) {
        this._state.profilePage.textPostUpdate = newTextPost

        this._renderTree(this._state)
    },

    textMessageUpdate(newTextMessage) {
        this._state.dialogsPage.textMessageUpdate = newTextMessage

        this._renderTree(this._state)
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._renderTree(this._state)
    },

    subscride(observer) {
        this._renderTree = observer
    },
}

export default store





