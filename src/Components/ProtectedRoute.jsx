import  React from "react"
import {Route, Redirect} from 'react-router-dom'
import {useLogined} from '../hooks'



function ProtectedRoute(props){
      
    const isAuthenticated=useLogined();
    const Component =props.component;     
    
     return isAuthenticated ? 
                    (<Component />) 
                    : (<Redirect  to="/login"/>)       
      
      
}


export default ProtectedRoute