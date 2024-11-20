import React, { PureComponent } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Preeti",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Preeti",
      });
    }, 2000);
  }
  render() {
    console.log("Parent Component");
    return (
      <div>
        Parent Component<RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp>
      </div>
    );
  }
}

export default ParentComp;

//Pure Components get rid of unecessary re-renders and improve the performance
//creating a pure component extend it with PureComponent and import PureComponent from 'react' library
//implements shouldComponentUpdate performing shollow comparisons with the props and the state
//The pure components as parent does not re-render if there is no shallow comparison and also do not re-render its child components though they may be aregular component
//make sure the child components are also the pure components if the parent component is a putre component
