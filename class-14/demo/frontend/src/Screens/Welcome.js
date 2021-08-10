import React, { Component } from 'react';
import cat from './assets/cat.svg';
import './Welcome.css'

export class Welcome extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={cat} className="App-logo" alt="logo" />
          <p>
            Welcome to Cat Owners
          </p>
        </header>
      </div>
    );
  }
}

export default Welcome;
