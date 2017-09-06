import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Loader from '../AuthBox/Loader'


export default class AuthBox extends Component {
    constructor(){
    super();
    this.state = {
      loading:true,
    }
  }

  componentDidMount(){
    let loader = this;
    setTimeout(function(){ loader.setState({ loading: false }) }, 1500);
  }
  render() {
    return this.state.loading === true ? ( 
          <Loader loadTrigger={this.props.loadTrigger} />
      ) : (
        <div className="authbox">
          <p> Enter the code to check for authenticity! </p>
          <input/>
          <br/>
          <Link style={{ textDecoration: 'none' }} to="/auth"><div className="button"><a href="">Verify</a></div></Link>
        </div>
    );
  }
}

