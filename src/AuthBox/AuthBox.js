import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Loader from '../AuthBox/Loader'


export default class AuthBox extends Component {
    constructor(){
    super();
    this.state = {
      loading:true,
      value: '',
      warning: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    if(this.state.value!==''){
      this.props.checkId(this.state.value);
    }
  }

  componentDidMount(){
    let loader = this;
    setTimeout(function(){ loader.setState({ loading: false }) }, 2000);
  }

  render() {
    return this.state.loading === true ? ( 
          <Loader loadTrigger={this.props.loadTrigger} />
      ) : (
        <div className="authbox">
          <p> Enter the code to check for authenticity! </p>
          <br/>
              <input type="text" value={this.state.value} onChange={this.handleChange} />
              <br/>
               <Link style={{ textDecoration: 'none' }} to="/poc/auth">
                  <div onClick={this.handleSubmit} className="button"><a href="">Verify</a></div>               
              </Link>
          <div className="tracker_text">Enter 0xc72DEa9c19D6a056B57eaA0B70Bc5e8d2c7FF148 to demo the product check. This demo serves as a proof of concept is not connected to the blockchain.</div>

        </div>
    );
  }
}

