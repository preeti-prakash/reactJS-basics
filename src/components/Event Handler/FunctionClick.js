import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("Button Clicked");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;

//onClick must be in camelcase in react . the eventHandler must be mention in the braces{}
//the event handler must not be a function call rather should be a function
