import  React,{useEffect} from "react";
import {Card, CardHeader, CardContent} from '@material-ui/core'
import { Link, Redirect, useRouteMatch } from 'react-router-dom'
import { deleteTaskRequest } from '../../utils/middleware'
import {connect, useDispatch, useSelector,useStore} from 'react-redux'
import {useParams,withRouter} from 'react-router-dom'
import {getTaskById} from '../../utils/selectors'
import NavBar from  '../NavBack'
import UserGroup from  '../UserGroup'



// useEffect
const TaskDetails = ({tasks,history}) =>{
  let {taskId} = useParams();
  let {index} = useParams();
  
  const {url} =useRouteMatch();
  const dispatch = useDispatch();
  const task=useSelector((state) => getTaskById(state.task.tasks, taskId) )
  

  const deleteTask = (e) =>{
        e.preventDefault();
        if(window.confirm("Are you sure you want to delete")){
            dispatch(deleteTaskRequest(taskId));
            window.location.href="/";
        }

  } 


  return task ? (
    <div>
        <NavBar path ="/" />
        <Card className="task margin-top padding" >
                    <div className="float-right">
                        <Link className="btn-link btn margin-right" to="#" onClick={ (e) => deleteTask(e) } >Delete</Link>
                        <Link className="btn-link btn margin-right" to={`/tasks/edit/${task.id}/${index}`}>Edit</Link>
                    </div>
                    <CardHeader title={task.name} />
                    <CardContent>
                        <div>
                           <b> Description</b>
                           <p className="description-content"> {task.description}</p>
                        </div>
                        {task.assignedUsers.length === 0  ? 
                        <span className="btn-link">
                            <Link to={`${url}/tasks/assign/${task.id}`} > Assign to User </Link>
                        </span>
                        :<UserGroup  users={task.assignedUsers} />
                       
                        }
                    </CardContent>
                    
                
        </Card> 
    </div>
 ) : (<Redirect to="/" /> )

}



export default  withRouter(TaskDetails)

