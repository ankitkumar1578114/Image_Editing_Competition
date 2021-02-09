import './App.css';
import React from 'react'
import ReactDOM from 'react-dom';
import {browserHistory,Link ,Redirect,Switch,Route} from "react-router-dom";
import CreateTask from './CreateTask';
class Edited_images_boxes extends React.Component{
    constructor(props){
        super(props);
               this.state ={
          student :'',
          rate:'',
          pic_name:'',
          }
          this.rate = this.rate.bind(this);
        };
        static getDerivedStateFromProps(props,state){
            return {
                pic_name:props.pic_name,
                student:props.student,
              }
            }

            rate(){
                var rate = document.getElementById("rate").nodeValue;
                fetch('https://image-editing-competition.herokuapp.com/rate', {
                    method: 'post',
                    body : JSON.stringify({
                       pic_name:this.state.pic_name,
                       rate:rate 
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
if(this.state.pic_name)
{
return (
<div>
<div class="container mt-2 md-2">
{this.state.student}
<img src={process.env.PUBLIC_URL + "/Upload/" + this.state.pic_name}
style={{width:"100%"}}    
/>
<select class="form-control" id="rate" onChange={this.rate}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
    
    </select>
</div>

</div>
    );
}
    else{
        return (
          <div class="container p-3 mt-2 md-2" 
          style={{width:"90%", marginLeft:"5%",boxShadow:"0 0 15px rgb(0,0,0,0.1)",borderRadius:"2px"}}>
          <div class="spinner-border text-muted" style={{ width: "3rem", height: "3rem", marginLeft: "45%", marginTop: "5%" }}></div>
          </div>
        );
          
      }

}
}

export default Edited_images_boxes;
