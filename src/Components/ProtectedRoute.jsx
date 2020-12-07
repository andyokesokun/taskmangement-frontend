import  React from "react"
import {Redirect} from 'react-router-dom'
import {Route} from 'react-router-dom'




function ProtectedRoute({component, isLogined, ...rest}){
      
     const Component =component;     
     return (<Route {...rest} render={props => (
        isLogined 
          ? 
          (<Component {...props}/>)
          :
          (<Redirect to={{pathname: '/login', state: {from: props.location}}}/>)
      )}/>)    
      
      
}


export default ProtectedRoute