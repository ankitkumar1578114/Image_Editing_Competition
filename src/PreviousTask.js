import './App.css';
import React from 'react'
import ReactDOM from 'react-dom';
import {browserHistory,Link ,Redirect,Switch,Route} from "react-router-dom";
import CreateTask from './CreateTask';
import PreviousTaskBoxes from './PreviousTaskBoxes';
var array=[];
class PreviousTask extends React.Component{
    constructor(props){
        super(props);
        this.state ={
          description :'',
          getting:[]
        };
    
          this.getDetails = this.getDetails.bind(this);
        this.getDetails();
      
       }
      getDetails(){
        fetch('https://image-editing-competition.herokuapp.com/getDetailsofimages', {
            method: 'post',
            body : JSON.stringify({
               email:sessionStorage.email 
            }),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          }).then((res) => res.json())
       .then((json) => {
        console.log(json.mes.length);        
        var meslen=json.mes.length;
        // this.setState({getting:json.mes});         
        console.log(json.mes)
        this.setState({getting:json.mes})
      });
      return;
      }
    


render(){

return (
<div>
<h5 style={{marginLeft:"20px"}}>Your Tasks</h5>
{         
          array=this.state.getting,
          array.map(ani=>(
            <PreviousTaskBoxes  description={ani?ani.description:""} main_pic={ani?ani.pic_name:""} />
          )) 
}
</div>
    );
}
}

export default PreviousTask;
