import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, lastname } = this.props; //destructuring
    return (
      <div>
        <h1>
          Welcome {name} {lastname}
        </h1>
      </div>
    );
  }
}

export default Welcome;
