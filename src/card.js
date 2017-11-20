import React, { Component } from 'react';
import './card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-icon">
          <img className="tech-logo" src={this.props.cardInfo.logo}/>
        </div>
        <div className="card-body">
          <div className="card-title">{this.props.cardInfo.title}</div>
          <div className="card-description">{this.props.cardInfo.description}</div>
        </div>
      </div>
    );
  }
}

export default Card;
