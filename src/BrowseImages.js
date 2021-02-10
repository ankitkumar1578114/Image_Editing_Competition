import React from 'react'
import ReactDOM from 'react-dom';
import {browserHistory,Link ,Redirect} from "react-router-dom";
import axios from 'axios';
import BrowseImagesBoxes from './BrowseImagesBoxes';
var array=[]
class BrowseImages extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      description :'',
      selectedFiles :null,
      getting:[]
    };

      this.getDetails = this.getDetails.bind(this);
    this.getDetails();
  
   }
 
  getDetails(){
    fetch('https://image-editing-competition.herokuapp.com/getDetails', {
        method: 'post',
        body : JSON.stringify(),
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
return(
<>
Browse Images
{         
          array=this.state.getting,
          array.map(any=>(
            <BrowseImagesBoxes  description={any?any.description:""} main_pic={any?any.pic_name:""} />
          )) 
}
<BrowseImagesBoxes  description={this.state.getting[0]?this.state.getting[0].description:""} main_pic={this.state.getting[0]?this.state.getting[0].pic_name:""} />
 <BrowseImagesBoxes  description={this.state.getting[1]?this.state.getting[1].description:""} main_pic={this.state.getting[1]?this.state.getting[1].pic_name:""} />
 
</>
);
}
}
export default BrowseImages;