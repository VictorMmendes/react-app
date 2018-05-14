import React, { Component } from 'react';
import './App.css';
import Logo from './components/logo';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo image={logo} speed="slow" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
