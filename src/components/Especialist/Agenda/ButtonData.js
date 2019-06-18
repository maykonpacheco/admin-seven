import React, { useState, Component } from "react";

class ButtonData extends Component {
  constructor(props) {
  super(props);
  this.state = { buttonData: false };
  

  this.handleClick = this.handleClick.bind(this)
}


handleClick(e) {
  this.setState({
    buttonData: !this.state.buttonData
  })
  e.preventDefault()
}


  render() {
    let btn_class01 = this.state.buttonData ? "btn btn-success bodyschedule" : "btn btn-outline-primary bodyschedule";
    return (

      <button
        className={btn_class01}
        onClick={this.props.handleClick}
      >
        {this.props.text}
      </button>

      
    );
  }
}

export default ButtonData;

