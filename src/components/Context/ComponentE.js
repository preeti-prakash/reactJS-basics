import React, { Component } from "react";
import ComponentF from "./ComponentF";
import userContext from "./userContext";

class ComponentE extends Component {
  render() {
    return (
      <>
        <div> Component E context {this.context} </div>
        <ComponentF />
      </>
    );
  }
}
ComponentE.contextType = userContext;
export default ComponentE;
