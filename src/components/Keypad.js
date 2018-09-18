import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// Code Keypad Component Here

export default class Keypad extends Component {

  handleKeyUp = () => {
    console.log("Entering password...")
  }

  render() {
    return (
      <input
      type="password"
      placeholder="Enter Password"
      onKeyUp={this.handleKeyUp}
      >

      </input>
    )
  }
}
