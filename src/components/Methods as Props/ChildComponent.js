import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler("Child")}>Greet Parent</button>
    </div>
  );
}

export default ChildComponent;

//access the method using props parameter, can also pass parameters using arrow function to the parent
