import  './sass/_utils.sass'
import {HashRouter, Route, Switch} from 'react-router-dom'
import  Login  from './Components/Login' 
import  Logout  from './Components/Logout' 
import React from 'react'
import  Dashboard from './Components/Dashboard'
import  NotFound from './Components/NotFound'
import  ProtectedRoute from './Components/ProtectedRoute'


const  App = ()=>{
    return (
            <HashRouter>
                <Switch>
                    <ProtectedRoute exact path="/"  component={Dashboard} />
                    <ProtectedRoute  path="/dashboard"  component={Dashboard} />
                    <Login path="/login" />
                    <Logout path="/logout" />
                    <Route path="*"  component={NotFound} />

                </Switch>
                
          </HashRouter>
       )
}

export default App;
