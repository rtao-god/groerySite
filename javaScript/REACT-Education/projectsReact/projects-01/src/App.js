import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Navbar from './components/Navbar'
import ProfilePage from './components/ProfilePage/ProfilePage'
import DialogsPage from './components/DialogsPage/DialogsPage'

const App = (props) => {
  return (
    <div id="allContent">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/react/javaScript/REACT-Education/projectsReact/projects-01/public/index.html/" element={<ProfilePage postsArrow={props.state.profilePage.postsArrow} dispatch={props.dispatch} />} />
        <Route path="/react/javaScript/REACT-Education/projectsReact/projects-01/public/index.html/dialogs/" element={<DialogsPage userArrow={props.state.dialogsPage.userArrow} nameItem={props.state.dialogsPage.nameItem} dispatch={props.dispatch} />} />
      </Routes>
    </div>
  )
}

export default App
