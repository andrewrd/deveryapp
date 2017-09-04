import React, { Component } from 'react';
import logo from './img/logo.svg';
import AuthBox from './AuthBox/AuthBox'
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} class="logo"/>

        <AuthBox/>

      </div>
    );
  }
}

export default App;
