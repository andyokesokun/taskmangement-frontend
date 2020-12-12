import './style.sass'
import  React  from "react";
import  User from '../User'
import {connect}  from "react-redux";
import {Link}  from "react-router-dom";
import {Card, CardContent} from '@material-ui/core'

const UserGroup = ({users}) =>{

   return (                  
        <div className="user-list d-flex margin-top">
            {users.map( (user, index) =>
                <User key={index} user={user}  />
            )}
        </div>
  )


}



export default  UserGroup
