import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Title from './Title'
import {BrowserRouter,Route,Switch,Link} from "react-router-dom"
ReactDOM.render(
    <>
      <BrowserRouter>
        <Title />
        <App/>
      </BrowserRouter>
    </>
    ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
