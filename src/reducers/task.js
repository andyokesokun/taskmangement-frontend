import {ADD, REMOVE, UPDATE} from '../constants/actionTypes'
import {removeTask, removeTaskId} from '../utils/selectors';

const initialState ={
    tasks: [],
    taskIds: []
}

export default (state=initialState, action) =>{
    const previousState = [...state]
    switch(action.type){
        
        case  ADD:                          
            return {
                    ...previousState,
                    taskIds:[...previousState.taskIds,id],
                    tasks:[
                        ...previousState,
                        state.tasks.push(action.payload)
                    ]
                }

         case  REMOVE:
           const id=action.id;                             
           return {
                ...previousState,
                taskIds:[...previousState.taskIds, removeTaskId(id) ],
                tasks:[
                    ...previousState,
                    removeTask(id)
                ]
            }

         case  UPDATE: 
            const {index, ...content} =action.payload;                      
            return {
                    ...previousState,
                    taskIds:[...previousState.taskIds,id],
                    tasks:[
                        ...previousState,
                        state.tasks[index]=content
                    ]
                }
        
          
          default :
            return state;
        }

    

};