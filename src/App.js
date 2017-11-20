import React, { Component } from 'react';
import {HashRouter, Switch, Route, Link } from 'react-router-dom'
import logo from './img/ap-logo.svg';
import sacramento from './img/sacramento.jpg'
import ScrollableAnchor from 'react-scrollable-anchor';

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
import C4Logo from './img/c4-logo.jpg';
import SequenceLogo from './img/sequence-logo.jpg';

import ContactPhone from 'material-ui-icons/ContactPhone';
import Email from 'material-ui-icons/Email';
import AccountCircle from 'material-ui-icons/AccountCircle';

import './App.css';
import Card from './card';
import SideCard from './sidecard'

class App extends Component {
  componentDidMount() {
    document.title = "Allan Pahn";
  }
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
    const connect4_card = {
      title : "Connect 4",
      description : "Built using React Connect 4 is part of squadmingo.com",
      logo : C4Logo,
    };
    const sequence_card = {
      title : "Sequence",
      description : "Built using React, Sequence is an online multiplayer game part of squadmingo.com",
      logo : SequenceLogo,
    }
    const squadmingo_card = {
      title : "SquadMingo",
      description : "Built using React and NodeJS, SquadMingo is an online multiplayer game room where users can play and chat with friends over Socket.io",
      logo : MongoDBLogo,
    }
    const email_card = {
      title : "Email",
      description : "pahnallan@gmail.com",
      icon : (<Email color={'#70B2C1'} style={{width: '140', height : '140', }} />),
    };
    const mobile_card = {
      title : "Mobile",
      description : "(916) 803-5274",
      icon : (<ContactPhone color={'#70B2C1'} style={{width: '140', height : '140', }} />),
    }
    const github_card = {
      title : "GitHub",
      description : "https://github.com/pahnallan",
      icon : (<AccountCircle color={'#70B2C1'} style={{width: '140', height : '140', }} />),
    }
    return (
      <div className="App">
        <header className="App-header">
          <div className="wrapright">
            <a href='#technical'> Technical </a>
            <a href='#projects'> Projects </a>
            <a href='#contact'> Contact </a>
          </div>
          <img className="logo" src={logo} />
        </header>
        <div className="cover-card">
          <h1 className="cover-content"> ALLAN PAHN </h1>
          <h1 className="cover-desc"> DESIGNER. DEVELOPER. DREAMER. </h1>
        </div>
        <div className="card-container">
          <SideCard />
        </div>
        <ScrollableAnchor id={'technical'}>
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
        </ScrollableAnchor>
        <ScrollableAnchor id={'projects'}>
          <div className="card-container">
            <div className="header-title"> Projects </div>
            <div className="card-row">
              <Card cardInfo={squadmingo_card}/>
              <Card cardInfo={connect4_card}/>
              <Card cardInfo={sequence_card}/>
            </div>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'contact'}>
          <div className="card-container">
            <div className="header-title"> Contact </div>
            <div className="card-row">
              <Card cardInfo={email_card}/>
              <Card cardInfo={mobile_card}/>
              <Card cardInfo={github_card}/>
            </div>
          </div>
        </ScrollableAnchor>
        <header className="App-footer">
          <div className="wrapright">
            <a href='#technical'> Technical </a>
            <a href='#projects'> Projects </a>
            <a href='#contact'> Contact </a>
          </div>
          <p> Copyright Allan Pahn 2017 </p>
        </header>
      </div>
    );
  }
}

export default App;
