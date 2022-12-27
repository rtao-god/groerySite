import React from 'react'

import './App.css'

import Header from './components/Header'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Posts from './components/Post/Posts'
import Profile from './components/Profile'
import Dialogs from './components/Dialogs'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'



const App = (props) => {
  return (
    <BrowserRouter>
      <div id="allContent">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={[<MainContent />, <Posts />]} />
          <Route path="/home" element={[<MainContent />, <Posts />]} />
          <Route path="/dialogs" element={<Dialogs />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
