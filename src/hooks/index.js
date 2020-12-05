import {useState, useEffect} from 'react'
import auth from '../auth/authProvider'

function useLogined(){
     const [isLogined, setIsLogined]  = useState(auth.checkAuth());  
     
     useEffect( () =>{
         setIsLogined(auth.checkAuth());
     },[isLogined])
      
      return {isLogined, setIsLogined}
    }

export {useLogined}

