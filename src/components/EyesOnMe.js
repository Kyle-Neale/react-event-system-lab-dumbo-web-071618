import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// Code EyesOnMe Component Here

export default class EyesOnMe extends Component {

  handleFocus = (event) => {
    console.log("Good!")
  }

  handleBlur = (event) => {
    console.log("Hey! Eyes on me!");
  }

  render() {
    return (

      <button
      onFocus={this.handleFocus}
      onBlur={this.handleBlur}
      >
      Hey!
      </button>
    )
  }
}
