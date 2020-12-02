import {ADD, REMOVE} from '../constants/actionTypes'
import {Auth} from '../auth/authHelper'
import authProvider from '../auth/authProvider';

const initialState ={
    isLogined: authProvider.checkAuth()
}

export default (state=initialState, action) =>{
    switch(action.type){
        case  SET:                      
          
        return {
                ...state,
                isLogined: action.isLogined
            }
          
          default :
            return state;
        }

    

};