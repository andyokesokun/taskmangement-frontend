import './sidebar.sass'
import React from 'react'
import {Link} from 'react-router-dom'
import {Add} from '@material-ui/icons'



const SideBar= () =>(
    <div className="sidebar"> 
        <div className="title">
            <p>Do Task</p>
        </div>
        <div className="navlinks">
          
            <li className="nav-link action">
                <Link to="addtask"><span className="d-flex"><Add /> Add New Task</span></Link>
            </li>
     
            <li className="nav-link">
               <Link  to ="manageTask">Task List</Link>
            </li>
            <li className="nav-link">
               <Link to ="assignedTask">Assigned List</Link>
            </li>
        </div>
    </div>
)

export default SideBar