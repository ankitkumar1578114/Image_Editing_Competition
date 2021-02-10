import React from 'react'
import ReactDOM from 'react-dom';
import {browserHistory,Link ,Redirect} from "react-router-dom";
import axios from 'axios';

class Signupfs extends React.Component{
    constructor(props){
        super(props);
     
          this.onChangeEmail = this.onChangeEmail.bind(this);
          this.onChangeLevel = this.onChangeLevel.bind(this);
          this.onChangePassword = this.onChangePassword.bind(this);
          this.submitHandler = this.submitHandler.bind(this);
        this.state ={
          email :'',
          password :'',
        };
       }
     
      onChangeEmail(e){
        this.setState({
          email: e.target.value
        });
      }
     
      onChangePassword(e){
        this.setState({
          password: e.target.value
        });
      }
      onChangeLevel(e){
        this.setState({
          level: e.target.value
        });
      }     

async submitHandler(e){
    e.preventDefault();
    var formdata={};
    formdata.email=this.state.email;
    formdata.password=this.state.password;
    formdata.level=this.state.level;
    try{
    var res1 =  await axios({
        method: 'post',
        url: 'https://image-editing-competition.herokuapp.com/signupfs',
        data: formdata,
        headers: {'Content-Type': 'application/json' }
       });
      console.log("dkljsfkl");
      console.log(res1);
    }
    catch(err)
    {
     console.log(err);
    }
 //     fetch('http://localhost:3005/getdata', {
//         method: 'post',
//         body : JSON.stringify(),
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         }
//       }).then((res) => res.json())
//    .then((json) => {
//     console.log(json)
// });

  }
render(){
return(
<>
<div style={{paddingTop:"10px",paddingBottom:"10px",fontSize:"18px",textAlign:"center",fontWeight:"700"}}>Student's Signup</div>
<form onSubmit={this.submitHandler}>
    <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="Enter email" onChange={this.onChangeEmail}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onChange={this.onChangePassword} />
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1" onChange={this.onChangeLevel} name="level">
      <option>Beginner</option>
      <option>Intermediate</option>
      <option>Advanced</option>
    </select>
    </div>
  <input type="submit" class="btn btn-default" style={{backgroundColor:"black",color:"white"}} value="Signup" id="login" />
</form>
</>
);
}
}
export default Signupfs;