import React from "react";

function FragmentDemo() {
  return (
    <React.Fragment>
      {/* React Fragment */}
      <h1>Fragment Demo</h1>
      <p>This describes the Fragment Demo Component</p>
    </React.Fragment>
  );
}

export default FragmentDemo;

//Adjacent JSX elements must be wrapped in an enclosing tag
//React Fragment - that will prevent from creating an extra node in the DOM tree
