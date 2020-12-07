import React from 'react'
import { Link} from 'react-router-dom'
import {ArrowBack} from '@material-ui/icons'

const NavBack =({path}) =>(
    <div className="margin">
        <li className="nav-link">
                    <Link to={path}><span className="d-flex"><ArrowBack />Back</span></Link>
        </li>
    </div>
);

export default NavBack