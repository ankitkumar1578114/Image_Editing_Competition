import React from 'react'
import ReactDOM from 'react-dom';
import {browserHistory,Link ,Redirect} from "react-router-dom";
import axios from 'axios';

class CreateTask extends React.Component{
    constructor(props){
        super(props);
     
          this.onChangeDescription = this.onChangeDescription.bind(this);
          this.onChangeFiles = this.onChangeFiles.bind(this);
          this.submitHandler = this.submitHandler.bind(this);
        this.state ={
          description :'',
          selectedFiles :null,
          isSent:false
        };
       }
     
      onChangeDescription(e){
        this.setState({
          description: e.target.value
        });
      }
     
      onChangeFiles(e){
        this.setState({
          selectedFiles: e.target.files
        });
      }
     

async submitHandler(e){
    e.preventDefault();
    var formdata=new FormData();
    formdata.append('instructor',sessionStorage.email);
    formdata.append('description',this.state.description);
    formdata.append('file' , this.state.selectedFiles[0]);
  
    try{
    var res1 =  await axios({
        method: 'post',
        url: 'https://image-editing-competition.herokuapp.com/getdata',
        data: formdata,
        headers: {'Content-Type': 'multipart/form-data' }
       });
      console.log("dkljsfkl");
      console.log(res1);
      if(res1.data=="Uploaded")
      {
       this.setState({isSent:true}) 
      }
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
if(this.state.isSent)
{
return <>Uploaded</>
}
else{
if(!sessionStorage.email)
{
  return <div>Signup First</div>;
}else{
  return(
    <>
<div style={{paddingTop:"10px",paddingBottom:"10px",fontSize:"18px",textAlign:"center",fontWeight:"700"}}>Create Task</div>
    <form >
      <div class="form-group">
        <input type="file" class="form-control-file" id="pic" onChange={this.onChangeFiles} required name="upload" />
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Description</label>
        <textarea class="form-control" id="description"  name="description"rows="3" onChange={this.onChangeDescription}  required></textarea>
      </div>
      <input type="submit" class="btn btn-default" style={{backgroundColor:"black",color:"white"}} value="Upload" id="login" onClick={this.submitHandler} />
    </form>
    </>
    );
}
}
}
}
export default CreateTask;