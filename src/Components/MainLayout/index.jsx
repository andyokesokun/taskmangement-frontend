import "./mainlayout.sass"
import  React  from "react"
import Sidebar from "../Sidebar"
import Navbar from "../NavBar"
import UserList from "../UserList"
import ProtectedRoute from '../ProtectedRoute'
import TaskList from  "../TaskList"
import TaskForm from "../Views/TaskForm"
import TaskAssign from "../Views/TaskAssign"
import UserForm from "../Views/UserForm"
import TaskDetails from "../Views/TaskDetails"
import {Route, Redirect, Switch,withRouter} from "react-router-dom"
import {Card, CardHeader} from '@material-ui/core'
import {useLogined} from '../../hooks'

const MainLayout =({location})=>{
  const {isLogined} = useLogined();


  return (
    !isLogined ?  (<Redirect  to ="/login" />)
    :
    (<div className="container "> 
        <Sidebar show={isLogined}/> 
        <div className="main-content">
             <Navbar  show={isLogined}/>  
             <div className="content   ">                 
                
                        {
                            location.pathname === "/" ? 
                            ( <Card>
                                <CardHeader title="Manage Tasks | Add Users | Assign Tasks" />
                            </Card> )
                            :
                            ""
                        }    
                          <div className="margin-top margin-bottom">
                           <Switch>
                               <ProtectedRoute exact path="/" isLogined={true} component={TaskList} />                     
                                <Route  path="/tasks/create" >
                                    <TaskForm  formTitle="Post Task"  btnTitle="ADD"  />
                                </Route>
                                <Route  path="/tasks/edit/:taskId/:index" >
                                    <TaskForm  formTitle="Post Task"  btnTitle="Update"  />
                                </Route>
                                <Route  path="/tasks/assign/:taskId/:index" >
                                    <TaskAssign/>
                                </Route>
                                <Route  path="/tasks/details/:taskId/:index" >
                                     <TaskDetails />
                                </Route>
                                <Route  path="/users/manage" >
                                    <UserList />
                                </Route>   
                                <Route  path="/users/create" >
                                    <UserForm  formTitle="Create User" btnTitle="Add"/>
                                </Route>   
                            </Switch>
                        </div>
                            

            </div>
            </div>
             
           
        </div>

     )
  )
};


export default  withRouter(MainLayout);