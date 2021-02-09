import './App.css';
import React from 'react'
import ReactDOM from 'react-dom';
import {browserHistory,Link ,Redirect,Switch,Route} from "react-router-dom";
import CreateTask from './CreateTask';
import PreviousTaskBoxes from './PreviousTaskBoxes';
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
<PreviousTaskBoxes  description={this.state.getting[0]?this.state.getting[0].description:""} main_pic={this.state.getting[0]?this.state.getting[0].pic_name:""} />
 <PreviousTaskBoxes  description={this.state.getting[1]?this.state.getting[1].description:""} main_pic={this.state.getting[1]?this.state.getting[1].pic_name:""} />
</div>
    );
}
}

export default PreviousTask;
