import  React from "react"
import {Redirect} from 'react-router-dom'
import {useLogined} from '../hooks'



function ProtectedRoute(props){
      
    const {isLogined}=useLogined();
    const Component =props.component;     
    
     return (isLogined ? 
                    (<Component />) 
                    : (<Redirect  to="/login"/>) )    
      
      
}


export default ProtectedRoute