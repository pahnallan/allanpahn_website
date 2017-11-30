import React, { Component } from 'react';
import {HashRouter, Switch, Route, Link } from 'react-router-dom'
import logo from './img/ap-logo.svg';
import ScrollableAnchor from 'react-scrollable-anchor';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import ReactGA from 'react-ga';

import './App.css';
import Card from './components/card';
import SideCard from './components/sidecard'

import {cardDataModel} from './models/cardmodels'; 


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

        <Switch>
          <Route path="/" render={(props) => (
            <div>
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
            </div>
          )} />
        </Switch>
        <header className="App-footer">
          <p> Copyright Allan Pahn 2017 </p>
        </header>
      </div>
    );
  }
}

export default App;
