import {ADD, REMOVE, UPDATE} from '../constants/actionTypes'
import {removeTask, removeTaskId} from '../utils/selectors';

const initialState ={
    tasks: [],
    taskIds: []
}

export default (state=initialState, action) =>{
    const previousState = {...state}
    switch(action.type){
          
        case  ADD: 
            var id =action.payload.id;                             
            return {
                    ...previousState,
                    taskIds:[...previousState.taskIds,id],
                    tasks:[
                        ...previousState,
                        state.tasks.push(action.payload)
                    ]
                }

         case  REMOVE:
                                        
           return {
                ...previousState,
                taskIds:[...previousState.taskIds, removeTaskId(action.id) ],
                tasks:[
                    ...previousState,
                    removeTask(action.id)
                ]
            }

         case  UPDATE: 
            const {index} =action.payload;                      
            return {
                    ...previousState,
                    taskIds:[...previousState.taskIds,action.payload.id],
                    tasks:[
                        ...previousState,
                        state.tasks[index]=action.payload
                    ]
                }
        
          
          default :
            return state;
        }

    

};