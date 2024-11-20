import React from "react";

function Columns() {
  return (
    <>
      <td>Name</td>
      <td>Preeti</td>
    </>
  );
}

export default Columns;

//The div tag enclosing the <td> is replaced with react fragment because the <td> cannot be enclosed in the <div> but should be in the table syntax format
