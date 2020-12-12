import {ADDUSER} from '../constants/actionTypes'


const initialState ={
    users: [],
    hasData: false
}

const userReducer =(state=initialState, action) =>{
   
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

    

}

export default userReducer