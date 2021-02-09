import './App.css';
import React from 'react'
import ReactDOM from 'react-dom';
import {browserHistory,Link ,Redirect,Switch,Route} from "react-router-dom";
import CreateTask from './CreateTask';
class PreviousTaskBoxes extends React.Component{
    constructor(props){
        super(props);
               this.state ={
          description :'',
          selectedFiles :null,
          main_pic:'',
          isSent:""
          }
        };
        static getDerivedStateFromProps(props,state){
            return {
                main_pic:props.main_pic,
                description:props.description
              }
            }

    render(){
        if(this.state.main_pic)
        {
  
return (
<div>
<div class="container p-3 mt-2 md-2" 
style={{width:"90%", marginLeft:"5%",boxShadow:"0 0 15px rgb(0,0,0,0.1)",borderRadius:"2px"}}>
Image Name:{this.state.main_pic}<br />
Description: {this.state.description} <br />   
<img  src={process.env.PUBLIC_URL + "/Upload/" + this.state.main_pic}  
style={{width:"80px",marginBottom:"10px",marginRight:"10px"}}   
/> 
<Link to={{
                    pathname: "/edited_images",
                    state: {
                      main_pic: this.state.main_pic
                    }
                  }}
                  class="btn btn-dark" type= "button">Explore</Link>

</div>
</div>
    );
}else{
    return (
        <div class="container p-3 mt-2 md-2" 
        style={{width:"90%", marginLeft:"5%",boxShadow:"0 0 15px rgb(0,0,0,0.1)",borderRadius:"2px"}}>
        <div class="spinner-border text-muted" style={{ width: "3rem", height: "3rem", marginLeft: "45%", marginTop: "5%" }}></div>
        </div>
      );    
}

}
}

export default PreviousTaskBoxes;
