import  React,{useEffect} from "react";
import {Redirect} from 'react-router-dom'
import auth  from '../auth/authProvider'
 

const Logout = () =>{
    
    useEffect(()=>{
        try{
            (async function(){
                await auth.logout();
            })();

        }catch(err){

        }
        
    },[]);

    return (
        <Redirect to="/login" />
    )
    
};  

export default Logout