import {ADDUSER} from '../constants/actionTypes'


const initialState ={
    users: [],
    hasData: false
}

export default (state=initialState, action) =>{
   
    switch(action.type){
        
        case  ADDUSER:                          
            return {
                    users:[
                        ...state.users,
                        ...action.payload
                    ],
                    hasData: action.payload ? true : false
                   
                }
        
          
          default :
            return state;
        }

    

};