import React from "react";
import ReactDOM from "react-dom";

function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>Portals Demo</h1>,
    document.getElementById("portal-root")
  );
}

export default PortalDemo;

//Portals - give the ability to break out of th DOM tree node
// referning the index.html root element adjacent div tag with id portal-root
