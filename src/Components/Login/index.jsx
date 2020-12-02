import  React, { useState } from "react";
import './login.sass'
import {Card, CardContent,TextField} from "@material-ui/core"
import {Lock} from '@material-ui/icons'
import {Redirect} from 'react-router-dom'
import {useLogined} from '../../hooks'
import authProvider  from  '../../auth/authProvider'


 function Login() { 
    
    const isAuthenticated=useLogined();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [hasError, setHasError] = useState(false);


   const handleClick = async () => {
       try{
            await  authProvider.login({username, password })

       }catch(err){
             setHasError(true)
       } 
       
   } 

    return (isAuthenticated ? 
                (<Redirect to="/dashboard"/>) : 
                (<div className="login-holder">
                <form className="fancy-form">            
                <Card>
                    {hasError ? 
                         <div class="error"> Invaild Username  And Passeord </div> 
                         :
                         ""
                    }
                    <CardContent>
                        <div className="centered">
                            <Lock className="login-icon"/>
                        </div>
                        <div className="form-field">
                            <TextField fullWidth   
                                    id="username" 
                                    label="Username" 
                                    variant="outlined"   
                                    onChange={ (e) => setUsername(e.target.value) } />
                        </div>
                        <div className="form-field">
                            <TextField
                                fullWidth
                                id="passward"
                                variant="outlined"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                onChange={ (e) => setPassword(e.target.value) } 
                                
                            />
                        </div>
        
                        <button className="btn" onClick={handleClick} >Login</button>
        
                    </CardContent>
                </Card>
            </form>
                <div className="login-side centered">
                    <h4>Do Task</h4>
                </div>
            </div>) 
        )
    

}

export default Login