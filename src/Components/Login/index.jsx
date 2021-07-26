import  React, { useState } from "react";
import './login.sass'
import {Card, CardContent,TextField} from "@material-ui/core"
import {Lock} from '@material-ui/icons'
import {Redirect, withRouter} from 'react-router-dom'
import {useLogined} from '../../hooks'
import authProvider  from  '../../auth/authProvider'
import {connect} from "react-redux";
import {setAuth} from '../../constants/actions'


function Login({history, setAuth}) { 
    
    const {isLogined, setIsLogined} = useLogined()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [hasError, setHasError] = useState(false)

    

    const handleClick = async () => {
       
       try{   
            const result=await  authProvider.login({username, password} )   
            console.log(result);
            setAuth({...result,logined: true});
            setHasError(false)
            setIsLogined(true)

       }catch(err){
             setHasError(true)
             console.log(err)
       } 
       
   } 

    return ( isLogined ?
                <Redirect  to="/home" />
                 :     
                (<div className="login-holder">
                <div className="fancy-form" >            
                <Card>
                   
                    {hasError ?  
                         <div className="error centered"> Invaild Username  And Password </div> 
                          :
                         ""}
                    
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
        
                        <div className="loginBtn">
                            <button className="btn" onClick={handleClick} >Login           
                            </button>
                           
                        </div>
                        
                    </CardContent>
                </Card>
            </div>
                <div className="login-side centered">
                    <h4>Do Task</h4>
                </div>
            </div>) 
        )
    

}

const mapStateToProps = (state) =>({
    isLogined: state ? state.auth.isLogined : ""
});

const mapActionToProps ={
    setAuth  
}

export default  connect(mapStateToProps, mapActionToProps) (withRouter(Login))


