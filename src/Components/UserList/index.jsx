import './style.sass'
import  React  from "react";
import  User from '../User'
import {connect}  from "react-redux";
import {Link}  from "react-router-dom";
import {Card, CardContent} from '@material-ui/core'

const UserList = ({users}) =>{

   return (                 
     <div>
        <Card>
            <CardContent>
                <Link className="btn-link btn" to="/users/create" >Add User</Link>
                <div className="user-list d-flex margin-top">
                    {users.map( (user, index) =>
                        <User key={index} user={user}  />
                    )}
                </div>
            </CardContent>
        </Card>
    </div>

  )


}

const mapStateToProps = (state) =>({
    users: state ? state.user.users : [] 
})


export default  connect(mapStateToProps)(UserList)

