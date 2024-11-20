import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    // this.inputRef.current.focus();
    if (this.cbRef) {
      this.cbRef.focus();
    }
    console.log(this.inputRef);
  }

  clickHandler = () => {
    // alert(this.inputRef.current.value);
    alert(this.cbRef.value);
  };

  render() {
    return (
      <div>
        {/* <input type="text" ref={this.inputRef}></input> */}
        <input type="text" ref={this.setCbRef}></input>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;

//refs help use to directly access the DOM elements
//React.createRef() - object that hold the current Dom element that has a ref attribute
//this.inputRef - object that refers to the current Dom element and this.inputRef.current.value hold the value of the current referenced DOM element

//callback refs
