import  client  from './makeRequest'
import {LOADING,FETCHTASK} from  '../constants/actionTypes'
import {addTask, removeTask, error, updateTask,  addUser} from  '../constants/actions'


export const fetchTasks =  () => {
    return async (dispatch,getState) =>{
        const currentState = getState();
        if(!currentState.task.hasData){
            dispatch({type:LOADING});
            const result=await client({path:"tasks"})
            if(result){
                dispatch({type:FETCHTASK, payload: result });
            }
          
            
        }
    }
    
} 


export const fetchTaskById = (id) => {
    return async (dispatch) =>{
        dispatch({type:LOADING});
        const result=await client({path:`tasks/${id}`})
        dispatch({type:FETCHTASK, payload: result });
         
    }
    
}

export const  addTaskRequest = (data) => {
    return  async (dispatch) =>{         
        const result=await client({path:"tasks",method:"POST", data:data })
        if(result){
           dispatch(addTask(result));
        }
  
    }  
} 

export const  deleteTaskRequest = (id) => {
    return  async (dispatch) =>{    
  
        const result=await client({path:`tasks/${id}`,method:"DELETE", data:{id} })
        if(result){
           dispatch(removeTask(id));
        }
    
          
    }  
} 

export const  updateTaskRequest = ({index, task} ) => {
    return  async (dispatch) =>{    
 
        const result=await client({path:`tasks/${task.id}`,method:"PUT", data:task })
        if(result){
           dispatch(updateTask(index, result));
        }
           
    }  
} 

export const  assignTaskRequest = ({index, taskId, userName}) => {
    return  async (dispatch) =>{    
   
             const data ={taskId, userName }
             console.log(data);
             const result=await client({path:`tasks/assign`,method:"POST", data:data})
             if(result){
                dispatch(updateTask(index, result));
             }
         
    }  
} 

export const  fetchUsers = () => {
    return  async (dispatch,getState) =>{    
        const currentState = getState();
        if(sessionStorage.getItem("token") &&  !currentState.user.users.hasData){
         
                
                console.log("Fetching users....");
                const result=await client({path:"users"})
                console.log("Fetched result....", result);
                if(result){
                   dispatch(addUser(result) );
                }
        }
    }  
}

export const  addUserRequest = ({username}) => {
    return  async (dispatch) =>{    
       
        const result=await client({path:"users",method:"POST", data:{username} })  
        if(result){     
           dispatch(addUser(result) )
        }
       
    }  
}