import {AUTH,RELOGOIN} from '../constants/actionTypes'

const initialState ={
    auth : {}, 
    isLogined : false,
    hasAccess : false,
    relogin : false
   
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
      
       case RELOGOIN: 
            const{relogin}= action.payload;
            return{
               ...state,   
               relogin
           }
          break;
         
          default :
            return state;
        }

    

};