import  React, {useEffect} from "react";
import './tasklist.sass'
import  Task from '../Task'
import {connect}  from "react-redux";
import {fetchAllTasks} from "../../utils/middleware"
import { withRouter } from "react-router-dom";

const TaskList = ({tasks}) =>{


   return (
    <div className="task-list d-flex">
        {tasks.map( (task, index) =>
            <Task key={task.id} task={task} index={index} />
        )}
    </div>
  )


}

const mapStateToProps = (state) =>({
    tasks: state ? state.task.tasks : [] 
})



// const mapDispatchToProp = dispatch =>({
//        fetchTasks: ()=> dispatch(fetchAllTasks()),
//        //fetchUsers: () =>dispatch(fetchUsers())
// })


export default  connect(mapStateToProps)(withRouter(TaskList) )

