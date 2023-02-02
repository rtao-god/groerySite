import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div id='Navbar'>
            <ul id='navbarLink'>
                <li> <NavLink to='/'>          Home   </NavLink> </li>
                <li> <NavLink to='/dialogs'> Messager </NavLink> </li>
                <li> <NavLink to='/news'>      News   </NavLink> </li>
                <li> <NavLink to='/music'>     Music  </NavLink> </li>
                <li> <NavLink to='/Settings'> Settings</NavLink> </li>
            </ul>
        </div>
    )
}


export default Navbar




