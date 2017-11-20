import React, { Component } from 'react';
import {HashRouter, Switch, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import sacramento from './img/sacramento.jpg'
import './App.css';
import Card from './card';
import SideCard from './sidecard'

class App extends Component {
  render() {
    const projects_card = {
      title : "Projects"
    };
    const technical_card = {title : "Technical"};
    const education_card = {title : "Education"};
    const work_card = {title : "Work"};
    return (
      <div className="App">
        <header className="App-header">
          <Link to={'Contact'}> <p> Contact </p> </Link>
          <Link to={'Projects'}> <p> Projects </p> </Link>
          <Link to={'Home'}> <p> Home </p> </Link>
        </header>
        <img src={sacramento} className="cover" />
        <div className="card-container">
          <SideCard />
        </div>
        <div className="card-container">
          <div className="header-title"> Projects </div>
          <div className="card-row">
            <Card cardInfo={projects_card}/>
            <Card cardInfo={technical_card}/>
            <Card cardInfo={education_card}/>
            <Card cardInfo={work_card}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
