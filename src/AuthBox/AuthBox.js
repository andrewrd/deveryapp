import React, { Component } from 'react';

export default class AuthBox extends Component {
  render() {
    return (
        <div className="authbox">
          <p> Enter the code to check for authenticity! </p>
          <input/>
          <br/>
          <div className="button"><a href="">Verify</a></div>
        </div>
    );
  }
}

