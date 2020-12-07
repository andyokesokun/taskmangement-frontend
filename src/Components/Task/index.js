import {Card, CardHeader, CardContent} from '@material-ui/core'
import { Link, useRouteMatch, withRouter } from 'react-router-dom'

const Task = ({task,index, location,history}) =>{
    const {url} =useRouteMatch();

   
  return (
     <Card className="task pb" >
                <CardContent>
                   <h3><Link to={`/tasks/details/${task.id}/${index}`}> {task.name} </Link></h3>
                    <p className="body">
                       {task.description}
                    </p>
                    {task.userResponses.length === 0  ? 
                      <Link className="btn-link btn bg-gray" to={`/tasks/assign/${task.id}/${index}`} > Assign to User </Link>
                
                   : task.userResponses.map((user, index)=> <span key ={index}> {user.username} </span>)
                }
                </CardContent>
                
               
    </Card>
)

}


export default withRouter(Task)

