import  React from "react";
import './style.sass'
import {Card, CardContent} from "@material-ui/core"
import {Lock} from '@material-ui/icons'



function NotFound() { 
      
   return (    
         <div>        
            <Card>
                <CardContent>
                    <div className="centered">
                        <Lock className="login-icon"/>
                    </div>
                   <h1>Page Not Found</h1>
       
                </CardContent>
            </Card>
    
            
        </div>
     )

}

export default NotFound
