import './App.css';
import React from 'react'
import ReactDOM from 'react-dom';
import {browserHistory,Link ,Redirect,Switch,Route} from "react-router-dom";
import CreateTask from './CreateTask';
import axios from 'axios';
class BrowseImagesBoxes extends React.Component{
    constructor(props){
        super(props);
     
          this.onChangeFiles = this.onChangeFiles.bind(this);
          this.submitHandler = this.submitHandler.bind(this);
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

    onChangeFiles(e){
        this.setState({
          selectedFiles: e.target.files
        });
      }

      
  async submitHandler(e){
        e.preventDefault();
        
        var formdata=new FormData();
        formdata.append('student',sessionStorage.email);
        formdata.append('main_pic',this.state.main_pic);
        formdata.append('file' , this.state.selectedFiles[0]);
        
        try{
        var res1 =   await axios({
            method: 'post',
            url: 'https://image-editing-competition.herokuapp.com/uploadstudent',
            data: formdata,
            headers: {'Content-Type': 'multipart/form-data' }
           });
          console.log("dkljsfkl");
          console.log(res1.data);
          if(res1.data=="Done")
          {
            console.log("Ya");
            this.setState({isSent:"Uploaded"})
          }
        }
        catch(err)
        {
         console.log(err);
        }
        
         }

     render(){
      if(this.state.main_pic)
      {
        return (
          <div>
            <form >
                <div class="container p-3 mt-2 md-2" 
                style={{width:"90%", marginLeft:"5%",boxShadow:"0 0 15px rgb(0,0,0,0.1)",borderRadius:"2px"}}>
                {this.state.main_pic}<br />
                Description:{this.state.description}<br />   
                <img src={process.env.PUBLIC_URL + "/Upload/" + this.state.main_pic} 
                style={{width:"80px",marginBottom:"10px",marginRight:"10px"}}   
                /> 
                <a href={process.env.PUBLIC_URL + "/Upload/" + this.state.main_pic} download><input class="btn btn-dark"  type="button" value="Download"/> </a>
                <br />
                <input type="file" class="form-control-file" id="pic" onChange={this.onChangeFiles} required name="upload" required />
                <input type="button" class="btn btn-default" style={{backgroundColor:"black",color:"white"}} value="Complete" onClick={this.submitHandler} id="login" />
          
                </div>
          
              </form>
              {
            this.state.isSent
              }
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

export default BrowseImagesBoxes;
