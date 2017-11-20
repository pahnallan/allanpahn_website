import React, { Component } from 'react';
import './sidecard.css';
import allanSquare from './img/allan-square.jpg'

class SideCard extends Component {
  render() {
    return (
      <div className="sidecard">
        <div className="sidecard-icon">
          <img className="img-allan" src={allanSquare} alt=""/>
        </div>
        <div className="sidecard-body">
          <div className="sidecard-title">About me</div>
          <div className="sidecard-description">Hi! Welcome to my page. My name is Allan Pahn and I'm a graduate from the University of California, Irvine with a degree in Computer Science.</div>
        </div>
      </div>
    );
  }
}

export default SideCard;
