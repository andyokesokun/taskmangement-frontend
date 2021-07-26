import  './sass/_utils.sass'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import React from 'react'
import MainLayout from './Components/MainLayout'
import Login from './Components/Login'
import Logout from './Components/Logout'


const  App = ()=>{
    return (
            <Router>   
                <Switch>
                    <Redirect path="/home"  to="/" />      
                    <Route  path="/login"  component={Login} />
                    <Route path="/logout"  component={Logout} />
                    <Route path="/">
                    </Route>      
                       
                </Switch>
                
 
          </Router>
       )
}

export default App;
