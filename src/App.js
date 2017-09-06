import React, { Component } from 'react';
import logo from './img/logo.svg';

import AuthBox from './AuthBox/AuthBox'
import Result from './AuthBox/Result'
import Loader from './AuthBox/Loader'

import './css/App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
       <Router>
        <div className="App">

          <img className="logo" src={logo}/>

          <Route exact path="/" component={AuthBox}/>
          <Route path="/auth" component={Result}/>
          <Route path="/topics" component={AuthBox}/>


        </div>
       </Router>
    );
  }
}

export default App;

/* Rewrite this code
    return this.state.loading === true ? ( 
        <div className="App">

          <img className="logo" src={logo}/>
          <Loader loadTrigger={this.props.loadTrigger} />

        </div>
      ) : (
       <Router>
        <div className="App">

          <img className="logo" src={logo}/>

          <Route exact path="/" component={AuthBox}/>
          <Route path="/auth" component={Result}/>
          <Route path="/topics" component={AuthBox}/>


        </div>
       </Router>
    );
 */ 
