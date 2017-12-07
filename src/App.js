import React, { Component } from 'react';
import logo from './img/logo.svg';

import AuthBox from './AuthBox/AuthBox'
import Result from './AuthBox/Result'
import Loader from './AuthBox/Loader'

import './css/App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { reference, database } from './config/config';

class App extends Component {
  constructor(){
    super();
    this.checkId = this.checkId.bind(this);
    this.clearResults = this.clearResults.bind(this); 
    this.state = {
      loadResults: { auth: 'Unknown', origin: 'Unknown'},
      input: '',
      result: '',
    }
  }
  
  //parse ref check that queries firebase.
  checkId(input){
    this.setState({ input: input });
    database.ref(input).once('value', snapshot => { this.setState({ loadResults: snapshot.val() }); });
  }

  //clear the previous query
  clearResults(){
    this.setState({ loadResults: null } );
    this.setState({ input: ''})
  }

  componentWillMount() {
    let data = database;
  }
  render() {
    return (
       <Router>
       <div>
        <div className="App">

          <img className="logo" src={logo}/>

          <Route exact path="/" render={(props) => ( <AuthBox {...props} checkId={this.checkId} /> )}/>
          <Route exact path="/auth" render={(props) => ( <Result {...props} loadResults={this.state.loadResults} input={this.state.input} result={this.state.result} clearResults={this.clearResults}/> )}/>

        </div>

          </div>
       </Router>
    );
  }
}

export default App;
