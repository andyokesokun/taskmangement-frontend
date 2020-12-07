import {ADDTASK, ERROR, FETCH, LOADING, REMOVETASK, UPDATETASK, AUTH, FETCHTASK} from '../constants/actionTypes'
import {removeTask} from '../utils/selectors';

const initialState ={
    tasks: [],
    hasErr:false,
    hasData:false,
    loading: false
 
}

export default (state=initialState, action) =>{
   
    switch(action.type){
       
        case  LOADING: 
             return {
                ...state,
                loading : true
               }
            break;
        case  FETCHTASK: 
        case  ADDTASK:                          
            return {
                    ...state,
                    tasks:[
                        ...state.tasks,
                        ...action.payload
                    ],
                    hasData : action.payload ? true : false
                }
        case ERROR:
            return {
                ...state,
                hasErr : true
               }
            break;
         case  REMOVETASK:                                   
           return {
                ...state,
                tasks:[
                    ...state.tasks,
                    removeTask(action.id)
                ]
            }

         case  UPDATETASK: 
            const {index} =action.payload;                      
            return {
                    ...state,
                    tasks:[
                        ...state.tasks,
                        state.tasks[index]=action.payload
                    ]
                }
        
          
          default :
            return state;
        }

    

};