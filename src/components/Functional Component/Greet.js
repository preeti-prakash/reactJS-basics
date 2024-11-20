//functional component in JS code
import React from "react";
// function greet() {
//   return <h1>Hello Preeti</h1>;
// }

//functional component in ES6
const greet = ({ name, lastname }) => {
  // props as destructuring
  return (
    <div>
      {/* <h1>Hello {props.name}</h1> */}
      <h1>
        Hello {name} {lastname}
      </h1>
    </div>
  );
};
export default greet;
