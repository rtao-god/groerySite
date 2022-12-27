import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div id='Navbar'>
            <ul id='navbarLink'>
                <li> <NavLink to='/home'>      Home    </NavLink> </li>
                <li> <NavLink to='/dialogs'> Messager  </NavLink> </li>
                <li> <NavLink to='/home'>      News    </NavLink> </li>
                <li> <NavLink to='/home'>      Music   </NavLink> </li>
                <li> <NavLink to='/home'>     Settings </NavLink> </li>
            </ul>
        </div>
    )
}


export default Navbar




