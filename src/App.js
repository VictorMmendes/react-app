import React, { Component } from 'react';
import './App.css';
import Logo from './components/logo';
import logo from './logo.svg';
import SearchBar from './components/search_bar';

class App extends Component {
  constructor(props)
  {
      super(props);
      this.state = {
          search: ''
      };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo image={logo} speed="fast" />
          <Logo image={logo} speed="slow" />
          <Logo image={logo}/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
            <SearchBar
              default=" Golfinhos"
              onTermChange={
                term => this.setState({
                  search: term
                })
              }
            />
        </div>
        <div>
            <label>{this.state.search}</label>
        </div>
      </div>
    );
  }
}

export default App;
