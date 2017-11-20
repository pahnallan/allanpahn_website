import React, { Component } from 'react';
import {HashRouter, Switch, Route, Link } from 'react-router-dom'
import logo from './img/ap-logo.svg';
import sacramento from './img/sacramento.jpg'

// Icons
import WebLogo from './img/web-logo.svg';
import CSharpLogo from './img/csharp-logo.svg';
import CPlusPlusLogo from './img/cplusplus-logo.svg';
import NetLogo from './img/net-logo.svg';
import MongoDBLogo from './img/mongodb-logo.svg';
import NodeLogo from './img/node-logo.svg';
import SQLiteLogo from './img/sqlite-logo.svg';
import PythonLogo from './img/python-logo.svg';
import ReactLogo from './img/react-logo.svg';

import './App.css';
import Card from './card';
import SideCard from './sidecard'

class App extends Component {
  render() {
    const web_card = {
      title: "HTML/CSS/Javascript",
      description: "4+ years experience",
      logo : WebLogo,
    }
    const nodejs_card = {
      title : "Node.js",
      description : "2+ years experience",
      logo : NodeLogo,
    };
    const react_card = {
      title : "React",
      description: "1+ years experience",
      logo : ReactLogo,
    };
    const net_card = {
      title : ".NET",
      description : "3+ years experience",
      logo : NetLogo,
    };
    const csharp_card = {
      title : "C#",
      description : "3+ years experience",
      logo : CSharpLogo,
    };
    const cplusplus_card = {
      title : "C++",
      description : "2+ years experience",
      logo : CPlusPlusLogo,
    };
    const python_card = {
      title : "Python",
      description : "5+ years experience",
      logo : PythonLogo,
    };
    const sqlite_card = {
      title : "SQLite",
      description : "2+ years experience",
      logo : SQLiteLogo,
    };
    const mongo_card = {
      title : "MongoDB",
      description : "1+ years experience",
      logo : MongoDBLogo,
    }
    return (
      <div className="App">
        <header className="App-header">
          <div className="wrapright">
            <Link to={'Home'}> <p> Home </p> </Link>
            <Link to={'Projects'}> <p> Projects </p> </Link>
            <Link to={'Contact'}> <p> Contact </p> </Link>
          </div>
          <img className="logo" src={logo} />
        </header>
        <img src={sacramento} className="cover" />
        <div className="card-container">
          <SideCard />
        </div>
        <div className="card-container">
          <div className="header-title"> Technical Skills </div>
          <div className="card-row">
            <Card cardInfo={web_card}/>
            <Card cardInfo={nodejs_card}/>
            <Card cardInfo={react_card}/>
            <Card cardInfo={net_card}/>
            <Card cardInfo={csharp_card}/>
            <Card cardInfo={cplusplus_card}/>
            <Card cardInfo={python_card}/>
            <Card cardInfo={sqlite_card}/>
            <Card cardInfo={mongo_card}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
