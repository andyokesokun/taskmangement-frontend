import  React,{useState} from "react";
import './style.sass'
import {Card, CardContent,TextField, TextareaAutosize} from "@material-ui/core"
import {useForm} from '../../hooks'
import {connect, useDispatch} from "react-redux";
import {addUserRequest} from '../../utils/middleware'
import {withRouter} from 'react-router-dom'



function UserForm({formTitle, btnTitle}) {    
    const {formValues,handleChange, resetForm} = useForm({username:""} ) 
    const dispatch = useDispatch();
    const defaultPassword ="Password@123" 
    console.log(formValues)
    const handle = async () => {
        dispatch(addUserRequest(formValues))
        window.location.href="/users/manage"
    
   } 


    return (          
                (<div className="form-holder">
                 <h3 className="form-label">  {formTitle} </h3>
                <div className="fancy-form" >            
                <Card>
                             
                    <CardContent>
                    
                        <div className="form-field">
                        <div className="form-field">
                            <TextField fullWidth   
                                    id="username" 
                                    name ="username"
                                    label="Username" 
                                    variant="outlined"   
                                    onChange={handleChange } />
                        </div>
                                    
                        </div>
                        <p className="gray">Default Password: {defaultPassword}</p>
                         
                            <button className="btn" onClick={handle} > {btnTitle}           
                           </button>
                        
                    </CardContent>
                </Card>
            </div>
               
            </div>) 
        )
    

}

// const mapStateToProps = (state) =>({
//     isLogined: state ? state.isLogined : ""
// });

// const mapActionToProps ={
//     setAuth  
// }

// export default  connect(mapStateToProps, mapActionToProps) (withRouter(Login))
export default withRouter(UserForm)


