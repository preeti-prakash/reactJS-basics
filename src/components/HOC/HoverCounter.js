import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
  render() {
    return (
      <div>
        <h2 onMouseOver={this.props.clickCounter}>
          Hovered {this.props.count} times
        </h2>
      </div>
    );
  }
}

export default withCounter(HoverCounter, 10);
