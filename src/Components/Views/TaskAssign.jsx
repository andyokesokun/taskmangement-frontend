import  React from "react";
import {Card, CardHeader, CardContent, Select, InputLabel,FormControl} from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'
import { Link, useRouteMatch, useParams,withRouter} from 'react-router-dom'
import { assignTaskRequest } from '../../utils/middleware'
import {connect, useDispatch,useSelector} from "react-redux";
import {getUserListNotAssigned} from '../../utils/selectors'
import {useForm,useRedirect} from '../../hooks'
import {getTaskById} from '../../utils/selectors'
import NavBar from  '../NavBack'
import User from "../User";

  const TaskAssign = ({history}) =>{
  const {taskId} = useParams();
  const {index} = useParams();
  const task = useSelector((state) => getTaskById(state.task.tasks, taskId) )
 
  const notAssignedUsers = useSelector((state) => getUserListNotAssigned(state, task.assignedUsers) );
  const {formValues, handleChange} =useForm({userName:"" });

  const {url} =useRouteMatch();
  const dispatch = useDispatch();
  console.log(formValues)

  const  handle = (e) =>{    
       if(formValues){
           dispatch(assignTaskRequest({index, taskId, ...formValues}))
           window.location.href="/"
       }
    
  } 

  return (
    <div>
        <NavBar  path="" />
        <Card className="task" >
                  
                    <CardHeader title={task.name} />
                    <CardContent>
                        <p className="body">
                        {task.description}
                        </p>
                        <div className="form-group">
                   
                           <FormControl variant="outlined">
                                <InputLabel htmlFor="userName">Assign users</InputLabel>
                                <Select
                                    native
                                    value={formValues.newAssignedUsers}
                                    name="userName"
                                    onChange={handleChange}
                                    label="Age"
                                    inputProps={{
                                        name: 'userName',
                                        id: 'userName',
                                    }}
                                    >
                                    <option aria-label="None" value="" />
                                    {notAssignedUsers.map( user => 
                                        <option>
                                            {user.userName}
                                        </option>  
                                    )}
                                </Select>
                             </FormControl>
                       </div>

                     <button className="btn margin-top" onClick={handle} >Assign</button>

                    </CardContent>
                  
        </Card>
    </div>
 )
}


export default withRouter(TaskAssign)

