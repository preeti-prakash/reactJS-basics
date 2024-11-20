import React, { PureComponent } from "react";
import MemoComponent from "./MemoComponent";

class ParentMemo extends PureComponent {
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
        Parent Component
        <MemoComponent name={this.state.name} />
      </div>
    );
  }
}

export default ParentMemo;
