import React from 'react'
import store from './components/redux/state'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))

let renderTree = (state) => {
    root.render(
        <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>
    )
}

renderTree(store.getState())

store.subscride(renderTree)







