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

  componentDidMount(){
    let loader = this;
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
                <span className="inliner"><img src={checkbox}/><h1 className="result_text"> Genuine </h1></span>
                <p className="code">ak143l9a2sn</p>
              </div>

              <div className="rule"></div>

              <div className="origin">
                <p> Origin </p>
                <span className="inliner"><img src={origin} class="logo"/><div className="origin_text"> South Africa </div></span>
              </div>

              <div className="rule"></div>
              
              <div>
                <div className="tracker_text"> Tracker </div>
                <img src={cargo} class="logo"/>
                <div className="tracker_text"> No Tracker Information </div>
              </div>
          </div>
          <Link style={{ textDecoration: 'none' }} to="/"><div className="button"><a href="">Verify Again</a></div></Link>
        </div>
    );
  }
}

