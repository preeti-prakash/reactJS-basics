import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    //     this.setState({ count: this.state.count + 1 }, () => {
    //       console.log("Callback Value:", this.state.count);
    //     });

    this.setState((prevState, props) => ({
      count: prevState.count + 1,
    }));
    console.log(this.state.count);
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <div>
        <div>count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;

//state updates using setState() -  the state cannot be updated directly within the component without using setState() as it does not re-render the component thereby leaving browser with no update
//the setState() is an async method the below code gets executed at the time of its process, so as to execute a pice of code after the setSate method always place the code in the callback function of the setState method.
//when we want to update the state based on the previous state then we need to pass in a function as an argument
