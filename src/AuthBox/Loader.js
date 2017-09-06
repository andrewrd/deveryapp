import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import load from '../img/load.gif';

export default class Loader extends Component {

  render() {
  	{this.props.loadTrigger}
    return (
       <img className="loader" src={load} />
    
    )

	}
}