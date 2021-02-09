import './App.css';
import React from 'react'
import ReactDOM from 'react-dom';
import {browserHistory,Link ,Redirect,Switch,Route} from "react-router-dom";
import CreateTask from './CreateTask';
import Edited_images_boxes from './Edited_images_boxes';
class Edited_images extends React.Component{
    constructor(props){
        super(props);
        this.state ={
          description :'',
          main_pic:this.props.location.state.main_pic,
          getting:[]
        };
        
          this.getDetails = this.getDetails.bind(this);
        this.getDetails();
      
       }
    //    componentDidMount(){
    //     if (this.props.location !== undefined) {
        // this.setState(
        // {
        // // main_pic:this.props.location.state.main_pic,
        // }    
    //     );   
    // }       
    // }

      getDetails(){
        // this.setState({
        //     main_pic:this.props.location.state.main_pic,
        //     });        
        fetch('https://image-editing-competition.herokuapp.com/rateimages', {
            method: 'post',
            body : JSON.stringify({
               main_pic:this.state.main_pic 
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
    const { match, location, history } = this.props;
    console.log(this.props.location.state.main_pic);
return (
<div>
<div class="container p-3">
<h6>Main Image</h6>
<div class="container mt-2 md-2">
<img  src={process.env.PUBLIC_URL + "/Upload/" +this.state.main_pic}
style={{width:"100%"}}    
/>
</div>
</div>
<div class="container p-3">

<h6>Student's Images</h6>
<Edited_images_boxes  student={this.state.getting[0]?this.state.getting[0].student:""} pic_name={this.state.getting[0]?this.state.getting[0].pic_name:""} />
 <Edited_images_boxes  student={this.state.getting[1]?this.state.getting[1].student:""} pic_name={this.state.getting[1]?this.state.getting[1].pic_name:""} />

</div>
</div>
    );
}
}

export default Edited_images;
