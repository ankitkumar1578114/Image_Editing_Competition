import React from 'react'
import ReactDOM from 'react-dom';
import {browserHistory,Link ,Redirect} from "react-router-dom";
import axios from 'axios';

class Login extends React.Component{
    constructor(props){
        super(props);
     
          this.onChangeEmail = this.onChangeEmail.bind(this);
          this.onChangePassword = this.onChangePassword.bind(this);
          this.submitHandler = this.submitHandler.bind(this);
        this.state ={
          description :'',
          selectedFiles :null,
          isLoggedIn:false
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
     

async submitHandler(e){
    e.preventDefault();
    var loginDetails={
        email:this.state.email,
        password : this.state.password,    
    }
  
    fetch('https://image-editing-competition.herokuapp.com/login', {
        method: 'post',
        body: JSON.stringify(
          loginDetails
        ),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then((res) => res.json())
        .then((json) => {
          console.log(json.mes);
            if(json.mes=="yea")
            {
              this.setState({isLoggedIn:true});
              sessionStorage.setItem("email",json.email);   
              sessionStorage.setItem("who","instructor");   
            }
        })
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
  if(this.state.isLoggedIn)
{
  return <div><Redirect to="/"/></div>;
}else{

return(
<>
{
sessionStorage.email    
}
Login
<form onSubmit={this.submitHandler}>
<div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.onChangeEmail}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.onChangePassword}/>
  </div>
 <input type="submit" class="btn btn-default" style={{backgroundColor:"black",color:"white"}} value="Complete" id="login" />
</form>
</>
);
}
}
}
export default Login;