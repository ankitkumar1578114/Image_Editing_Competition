import './App.css';
import React from 'react'
import ReactDOM from 'react-dom';
import {browserHistory,Link ,Redirect,Switch,Route} from "react-router-dom";
import CreateTask from './CreateTask';
import PreviousTask from './PreviousTask';
import Main from './Main';
import Edited_images from './Edited_images';
import Signup from './Signup'
import Login from './Login'
import Signupfs from './Signupfs'
import Loginfs from './Loginfs'
import BrowseImages from './BrowseImages'
class App extends React.Component{
render(){
return (
<div>
<Switch>

            <Route exact path='/' component={Main} />
            <Route path ='/signup' component={Signup} />
            <Route path ='/signupfs' component={Signupfs} />
            <Route path ='/login' component={Login} />
            <Route path ='/loginfs' component={Loginfs} />
            <Route path ='/browseimages' component={BrowseImages} />
            <Route path='/createtask' component={CreateTask}/>
            <Route path='/edited_images' component={Edited_images}/>
            <Route path='/previoustask' component={PreviousTask}/>
            <Route component={Error} />
</Switch>

    </div>
    );
}
}

export default App;
