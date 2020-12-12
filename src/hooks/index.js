import {useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom';
import auth from '../auth/authProvider'

function useLogined(){
     const [isLogined, setIsLogined]  = useState(auth.checkAuth());  
     
     useEffect(() =>{
         setIsLogined(auth.checkAuth());
     },[isLogined])
      
      return {isLogined, setIsLogined}
    }



function useForm(formInput){
      
     const [formValues, setFormValues] = useState(formInput);
    
      const resetForm =(resetInput) => {
        setFormValues(resetInput);
     };
     

    const handleChange = ({ target: { name, value } } ) => {
        setFormValues(prevState => {
            return { ...prevState, [name]: value };
        });
    };


    return { handleChange, formValues, resetForm };

};


    
    
export {useLogined,useForm}

