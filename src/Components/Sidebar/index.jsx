import './sidebar.sass'
import React from 'react'
import {Link} from 'react-router-dom'
import {Add} from '@material-ui/icons'


const SideBar= ({show}) =>{
    return (
    <div className={`sidebar ${ !show ? 'd-none' : '' }` }> 
        <div className="title">
            <p>Do Task</p>
        </div>
        <div className="navlinks">
          
            <li className="nav-link action">
                <Link to="/tasks/create"><span className="d-flex"><Add /> Add New Task</span></Link>
            </li>
            <li className="nav-link">
               <Link  to ="/">Task List</Link>
            </li>
            <li className="nav-link"> 
               <Link to ="/users/manage">Manage Users</Link>
            </li>
        </div>
    </div>
)
}
export default SideBar