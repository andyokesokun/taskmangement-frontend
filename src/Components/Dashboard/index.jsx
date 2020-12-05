import './dashboard.sass'
import  React, { useEffect } from "react";
import {connect}  from "react-redux";
import {Card, CardContent, CardHeader} from "@material-ui/core"
import Sidebar from "../Sidebar";
import Navbar from "../NavBar";
import {fetchAllTasks} from '../../utils/middleware'
import {AddTask, }  from  '../../constants/actions'


const Dashboard =(props)=>{
    
  
 useEffect ( () =>{
    
     ( async() => {
        const tasks = await fetchAllTasks();

     })();
 });

  return (<div className="container">  
      <Sidebar/>
      <div className="main-content">
            <Navbar />
            <div className="content">
                <Card>
                    <CardHeader title="Manage Tasks | Add Users | Assign Tasks" />
                </Card>
            </div>
        </div>
    </div>)
};

// const mapPropsToState () =>{

// }

 const mapActionToState = ({state}) =>({
        
 })

export default Dashboard
