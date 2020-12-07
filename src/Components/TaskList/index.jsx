import  React, {useEffect} from "react";
import './tasklist.sass'
import  Task from '../Task'
import {connect}  from "react-redux";
import {fetchAllTasks,fetchUsers} from "../../utils/middleware"
import { withRouter } from "react-router-dom";

const TaskList = ({tasks,fetchTasks, fetchUsers}) =>{

    useEffect (() =>{
        fetchTasks();
        fetchUsers();
     
    },[fetchTasks,fetchUsers]);

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



const mapDispatchToProp = dispatch =>({
       fetchTasks: ()=> dispatch(fetchAllTasks()),
       fetchUsers: () =>dispatch(fetchUsers())
})


export default  connect(mapStateToProps, mapDispatchToProp)(withRouter(TaskList) )

