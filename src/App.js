import React, { Component } from 'react';
import {HashRouter, Switch, Route, Link } from 'react-router-dom'
import logo from './img/ap-logo.svg';
import sacramento from './img/sacramento.jpg'
import ScrollableAnchor from 'react-scrollable-anchor';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import ReactGA from 'react-ga';

import './App.css';
import Card from './card';
import SideCard from './sidecard'

import cardDataModel from './models/cardmodel'; 


class App extends Component {
  logPageView() {
    ReactGA.set({page : window.location.pathname + window.location.search});
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  componentDidMount() {
    document.title = "Allan Pahn";
    ReactGA.initialize('UA-110003744-1');
    this.logPageView();
    console.log("App Mounted");
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
      description : "Built using React. Connect 4 is part of the SquadMingo application and involves users playing over the internet.",
      logo : C4Logo,
    };
    const sequence_card = {
      title : "Sequence",
      description : "Built using React. Sequence is an online multiplayer game where a user attempts to get 5 in a row. This is a part of the SquadMingo game application",
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

    // Take the data model defined in cardmodel.js to create cards corresponding to each one.
    const skillCards = cardDataModel.skillsCardList.map((data) => { return (<Card cardInfo={data}/>) });
    const projectCards = cardDataModel.projectsCardList.map((data) => { return (<Card cardInfo={data}/>) } );
    const contactsCards = cardDataModel.contactsCardList.map((data) => { return (<Card cardInfo={data}/>) } );

    return (
      <div className="App">
        <header className="App-header">
          <div className="wrapright">
            <a href='#technical'> Technical </a>
            <a href='#projects'> Projects </a>
            <a href='#contact'> Contact </a>
          </div>
          <div className="menu-icon">
            <IconMenu
              iconButtonElement={<IconButton style={{ width: 60, height: 60}} iconStyle={{width: 40, height:40, color: 'white'}}><NavigationMenu /></IconButton>}
            >
              <a className="dropdown-ref" href='#technical'> 
                <MenuItem value="1"> Technical </MenuItem>
              </a>
              <a className="dropdown-ref" href='#projects'> 
                <MenuItem value="2"> Projects </MenuItem>
              </a>
              <a className="dropdown-ref" href='#contact'> 
                <MenuItem value="3"> Contacts </MenuItem>
              </a>
            </IconMenu>
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
              {skillCards}
            </div>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'projects'}>
          <div className="card-container">
            <div className="header-title"> Projects </div>
            <div className="card-row">
              {projectCards}
            </div>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'contact'}>
          <div className="card-container">
            <div className="header-title"> Contact </div>
            <div className="card-row">
              {contactsCards}
            </div>
          </div>
        </ScrollableAnchor>
        <header className="App-footer">
          <p> Copyright Allan Pahn 2017 </p>
        </header>
      </div>
    );
  }
}

export default App;
