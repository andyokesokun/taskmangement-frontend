import './navbar.sass'
import React from 'react'
import {Link} from 'react-router-dom'
import {ExitToApp} from '@material-ui/icons'


const NavBar= () =>(
    <div className="navbar">
        <div className="float-right margin-right d-flex">
           <ExitToApp className="icon" />
            <li className="nav-link">
                <Link to ="/logout">Logout</Link>
            </li>
        </div>
     </div>
)

export default NavBar