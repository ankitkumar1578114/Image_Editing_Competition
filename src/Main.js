import './App.css';
import React from 'react'
import ReactDOM from 'react-dom';
import {browserHistory,Link ,Redirect,Switch,Route} from "react-router-dom";
import CreateTask from './CreateTask';
class Main extends React.Component{
render(){
if(!sessionStorage.email)
{
    return (
        <div>
        {
         sessionStorage.email   
        }
        <div style={{textAlign:"center",marginTop:"50px"}}><Link to ="/signupfs"><button style={{color:"black",borderColor:"black"}} type="button" class="btn btn-outline-secondary m-3">Student's Signup</button> </Link></div>
        <div style={{textAlign:"center"}}><Link to ="/loginfs"><button style={{color:"black",borderColor:"black"}} type="button" class="btn btn-outline-secondary m-3 ">Student's Login</button></Link><br /></div>
        <div style={{textAlign:"center"}}><Link to ="/signup"><button style={{color:"black",borderColor:"black"}} type="button" class="btn btn-default m-3">Instructor's Signup</button> </Link></div>
        <div style={{textAlign:"center"}}><Link to ="/login"><button style={{color:"black",borderColor:"black"}} type="button" class="btn btn-outline-secondary m-3 ">Instructor's Login</button></Link></div>
        </div>
            );
        
}else{
    if(sessionStorage.who=="student")
    {
        return (
            <div>
            Hey! <br />
            {
             sessionStorage.email   
            }
            <Link to ="/browseimages"><button type="button" class="btn btn-outline-primary m-2 ml-5 mt-5">Browse Images</button> </Link>
            </div>
                );
    
    }
    if(sessionStorage.who=="instructor"){
    return (
        <div>
        Hey! <br />
        {
         sessionStorage.email   
        }
        <Link to ="/createtask"><button type="button"style={{color:"black",borderColor:"black"}} type="button" class="btn btn-outline-secondary  m-2 ml-5 mt-5">Create Task</button> </Link>
        <Link to ="/previoustask"><button type="button" style={{color:"black",borderColor:"black"}} type="button" class="btn btn-outline-secondary  m-2 ml-5 mt-5" class="btn btn-outline-secondary m-2 mt-5">Score Task</button></Link>
        </div>
            );
    }       
}
}
}

export default Main;
