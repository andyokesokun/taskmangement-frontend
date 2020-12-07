import {AUTH} from '../constants/actionTypes'

const initialState ={
    auth : {}, 
    isLogined : false,
    hasAccess : false
   
}

export default (state=initialState, action) =>{
   
    switch(action.type){
        
        case AUTH: 
              const{access,logined}= action.payload;
              return{
                 ...state,
                isLogined: logined,
                hasAccess : access,
                auth: action.payload
             }
            break;
         
          default :
            return state;
        }

    

};