import  React from "react";
import './style.sass'
import {Card, CardContent,TextField, TextareaAutosize} from "@material-ui/core"
import {Redirect, withRouter, useParams} from 'react-router-dom'
import {useForm} from '../../hooks'
import {connect, useDispatch,useSelector} from "react-redux";
import {addTaskRequest, updateTaskRequest} from '../../utils/middleware'
import {getTaskById} from '../../utils/selectors'



function TaskForm({formTitle, btnTitle,location}) { 
    
    let {taskId} = useParams();
    let {index} = useParams();
    let task = useSelector((state) => getTaskById(state.task.tasks, taskId) ) 
    const {formValues,handleChange} = useForm( task ? task : {name:"", description:"", duedate: "" }   )   
    const dispatch = useDispatch();

    const handle = async (e) => {
         e.target.disabled=true;
        //update task since id was provided in the url
        if(taskId){
            dispatch(updateTaskRequest(index, task) )
        }else{
            dispatch(addTaskRequest(formValues) )
           
        }
      
        window.location.href="/"
   } 

    return (          
                (<div className="form-holder">
                 <h3 className="form-label">  {formTitle} </h3>
                <div className="fancy-form" >            
                <Card>
                             
                    <CardContent>
                    
                        <div className="form-field">
                            <TextField fullWidth   
                                    id="name" 
                                    name="name"
                                    label="name"
                                    value ={formValues.name}
                                    variant="outlined"  
                                    required 
                                    onChange={handleChange} />
                        </div>
                        <div className="form-field">
                            <TextField fullWidth   
                                    id="description"
                                    name="description" 
                                    label="Description" 
                                    variant="outlined" 
                                    multiline 
                                    value ={formValues.description}
                                    required 
                                    onChange={handleChange} />
                        </div>
                        <div className="form-field">
                        <TextField
                            fullWidth
                            id="date"
                            label="DueDate"
                            type="date"
                            name="duedate"
                            required
                            value={formValues.duedate}
                            onChange ={handleChange}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        </div>
        
                            <button className="btn"  onClick={handle} > {btnTitle}           
                           </button>
                        
                    </CardContent>
                </Card>
            </div>
               
            </div>) 
        )
    

}

export default  withRouter(TaskForm)


