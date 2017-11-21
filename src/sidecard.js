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
          <div className="sidecard-description">My name is <b>Allan Pahn</b> and I'm a software engineer based in Sacramento, California. My passion includes programming, eating seafood, and taking my dog Charlie out for walks. If you wish to reach out to me for any reason, please use the Contact section. I greatly appreciate your time and interest.</div>
        </div>
      </div>
    );
  }
}

export default SideCard;
