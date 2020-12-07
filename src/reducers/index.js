import taskReducer from './taskReducer'
import userReducer from './userReducer'
import authReducer from './authReducer';
import  {combineReducers} from 'redux' 


export default combineReducers({user:userReducer,auth: authReducer,task:taskReducer, });