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
        url: 'http://localhost:3005/getdata',
        data: formdata,
        headers: {'Content-Type': 'multipart/form-data' }
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
if(!sessionStorage.email)
{
  return <div>Signup First</div>;
}else{
  return(
    <>
    Create Task
    <form onSubmit={this.submitHandler}>
      <div class="form-group">
        <input type="file" class="form-control-file" id="pic" onChange={this.onChangeFiles} required name="upload" />
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Description</label>
        <textarea class="form-control" id="description"  name="description"rows="3" onChange={this.onChangeDescription}  required></textarea>
      </div>
      <input type="submit" class="btn btn-default" style={{backgroundColor:"black",color:"white"}} value="Complete" id="login" />
    </form>
    </>
    );
}
}
}
export default CreateTask;