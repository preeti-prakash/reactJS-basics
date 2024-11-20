import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello Preeti",
    };
  }

  changeMessage() {
    this.setState({ message: "Thanks for subscribing" });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;

//state - the value that is mainteined within the componnet, can be mutable and can influence what is to be rendered in the browser
