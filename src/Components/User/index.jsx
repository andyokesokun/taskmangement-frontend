import  React from "react";
import Avatar from '@material-ui/core/Avatar';


function User({user}) {   
    return (<span className="user">
                <Avatar>{user.userName.substr(0,2)}</Avatar>
                <b>{user.userName }</b>
             </span>
           ) 
    

}
export default  User


