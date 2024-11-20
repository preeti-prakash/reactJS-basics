import React from "react";

function MemoComponent({ name }) {
  console.log("rendering memo component");
  return <div>{name}</div>;
}

export default React.memo(MemoComponent);

//React.memo(component) - helps rid off unnecessary re-renders when there is not change in the state
//same as pure component im classes - memos are the same in functional components
//React.memo(component) is something calles a Higher Order Component where the memo accepsts a component as an argument asnd adds something to the component and returns a new component
