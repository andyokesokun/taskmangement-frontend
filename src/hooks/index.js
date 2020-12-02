import {useState, useEffect} from 'react'
import auth from '../auth/authProvider'

function useLogined(){
     const [isLogined, setIsLogined]  = useState(false);  
     
     useEffect( () =>{
         setIsLogined(auth.checkAuth());
     },[])
      
      return isLogined
    }

export {useLogined}

