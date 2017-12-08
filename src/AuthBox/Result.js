import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import cargo from '../img/cargo.svg';
import checkbox from '../img/checkbox.svg';
import origin from '../img/origin.svg';
import Loader from '../AuthBox/Loader'


export default class Result extends Component {
  constructor(){
    super();
    this.state = {
      loading:true,
    }
  }

  componentWillMount(){
    let loader = this;
    console.log(this.props.analysis)
    setTimeout(function(){ loader.setState({ loading: false }) }, 3000);
  }

  render() {
    return this.state.loading === true ? ( 
          <Loader loadTrigger={this.props.loadTrigger} />
      ) : (
        <div className="result">
          <div className="resultbox">
              <div>
                <p> This item is: </p>
                <span className="inliner"><img src={checkbox}/><h1 className="result_text"> { this.props.loadResults!==null ? this.props.loadResults.auth : 'Unknown'} </h1></span>
                <p className="code">{this.props.input}</p>
              </div>

              <div className="rule"></div>

              <div className="origin">
                <p> Origin </p>
                <span className="inliner"><img src={origin} className="logo"/><div className="origin_text"> { this.props.loadResults!==null ? this.props.loadResults.origin : 'Unknown'} </div></span>
              </div>

              <div className="rule"></div>
              
              <div>
                <div className="tracker_text"> Tracker </div>
                <img src={cargo} className="logo"/>
                <div className="tracker_text"> No Tracker Information </div>
              </div>
          </div>
          <Link style={{ textDecoration: 'none' }} to="/poc"><div onClick={this.props.clearResults}className="button"><a href="">Verify Again</a></div></Link>
        </div>
    );
  }
}

