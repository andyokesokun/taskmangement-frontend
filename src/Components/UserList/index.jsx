import  React  from "react";
import  User from '../User'
import  UserGroup from '../UserGroup'
import {connect}  from "react-redux";
import {Link}  from "react-router-dom";
import {Card, CardContent} from '@material-ui/core'

const UserList = ({users}) =>{

   return (                 
     <div>
        <Card>
            <CardContent>
                <Link className="btn-link btn" to="/users/create" >Add User</Link>
                 <UserGroup  users={users} />
            </CardContent>
        </Card>
    </div>

  )


}

const mapStateToProps = (state) =>({
    users: state ? state.user.users : [] 
})


export default  connect(mapStateToProps)(UserList)

