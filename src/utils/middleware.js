import  client  from './makeRequest'
import {LOADING,FETCHTASK} from  '../constants/actionTypes'
import {addTask, removeTask, error, updateTask,  addUser} from  '../constants/actions'


export const fetchAllTasks =  () => {
    return async (dispatch,getState) =>{
        const currentState = getState();
        if(!currentState.task.hasData){
            dispatch({type:LOADING});
            try{
                
                const result=await client({path:"tasks"})
                dispatch({type:FETCHTASK, payload: result });
            }catch(err){
                dispatch(error(err));
                console.log(err)
            }

        }
    }
    
} 


export const fetchTaskById = (id) => {
    return async (dispatch) =>{
        dispatch({type:LOADING});
        try{
            const result=await client({path:`tasks/${id}`})
             dispatch({type:FETCHTASK, payload: result });
         }catch(err){
            // dispatch(error(err));
         }
    }
    
}

export const  addTaskRequest = (data) => {
    return  async (dispatch) =>{    
        try{
             const result=await client({path:"tasks",method:"POST", data:data })
             dispatch(addTask(result));
         }catch(err){
             dispatch(error(err));
         }
    }  
} 

export const  deleteTaskRequest = (id) => {
    return  async (dispatch) =>{    
        try{
             const result=await client({path:`tasks/${id}`,method:"DELETE", data:{id} })
             dispatch(removeTask(id));
         }catch(err){
            dispatch(error(err));
           
         }
    }  
} 

export const  updateTaskRequest = ({index, task} ) => {
    return  async (dispatch) =>{    
        try{
             const result=await client({path:`tasks/${task.id}`,method:"PUT", data:task })
             dispatch(updateTask(index, result));
         }catch(err){
            dispatch(error(err));
           
         }
    }  
} 

export const  assignTaskRequest = ({index, taskId, userName}) => {
    return  async (dispatch) =>{    
        try{
             const data ={taskId, userName }
             console.log(data);
             const result=await client({path:`tasks/assign`,method:"POST", data:data})
             dispatch(updateTask(index, result));
         }catch(err){
            dispatch(error(err));
           
         }
    }  
} 

export const  fetchUsers = () => {
    return  async (dispatch,getState) =>{    
        const currentState = getState();
        if(sessionStorage.getItem("token") &&  !currentState.user.users.hasData){
            try{
              
                const result=await client({path:"users"})
                dispatch(addUser(result) );
                
            }catch(err){
                console.log(err)
            
            }
        }
    }  
}

export const  addUserRequest = ({username}) => {
    return  async (dispatch) =>{    
        try{
             const result=await client({path:"users",method:"POST", data:{username} })
             dispatch(addUser(result) );
         }catch(err){
            dispatch(error(err));
           
         }
    }  
}