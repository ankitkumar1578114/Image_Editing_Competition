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

        <Link to ="/signup"><button type="button" class="btn btn-outline-primary m-2 ml-5 mt-5">Signup</button> </Link>
        <Link to ="/login"><button type="button" class="btn btn-outline-secondary m-2 mt-5">Login</button></Link>
        <Link to ="/signupfs"><button type="button" class="btn btn-outline-primary m-2 ml-5 mt-5">Student's Signup</button> </Link>
        <Link to ="/loginfs"><button type="button" class="btn btn-outline-secondary m-2 mt-5">Student's Login</button></Link>
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
        <Link to ="/createtask"><button type="button" class="btn btn-outline-primary m-2 ml-5 mt-5">Create Task</button> </Link>
        <Link to ="/previoustask"><button type="button" class="btn btn-outline-secondary m-2 mt-5">Score Task</button></Link>
        </div>
            );
    }       
}
}
}

export default Main;
