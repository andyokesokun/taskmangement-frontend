import {createStore, applyMiddleware} from 'redux'
import thunk from  'redux-thunk'
import reducer from './reducers'
import {fetchUsers, fetchTasks} from './utils/middleware'


const store=createStore(reducer, applyMiddleware(thunk))
export default store

store.dispatch(fetchTasks()); 
store.dispatch(fetchUsers());






