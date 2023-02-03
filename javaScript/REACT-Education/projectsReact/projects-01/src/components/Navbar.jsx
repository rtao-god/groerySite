import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div id='Navbar'>
            <ul id='navbarLink'>
                <li> <NavLink to='/react/javaScript/REACT-Education/projectsReact/projects-01/public/index.html/'>          Home   </NavLink> </li>
                <li> <NavLink to='/react/javaScript/REACT-Education/projectsReact/projects-01/public/index.html/dialogs'> Messager </NavLink> </li>
                <li> <NavLink to='/news'>      News   </NavLink> </li>
                <li> <NavLink to='/music'>     Music  </NavLink> </li>
                <li> <NavLink to='/Settings'> Settings</NavLink> </li>
            </ul>
        </div>
    )
}


export default Navbar




