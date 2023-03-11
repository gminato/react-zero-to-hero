import React from "react";
import ReactDOM from "react-dom/client";

let h1 = (
  <h1 id="title" key="h1" className="this-is-not-html">
    Heading 1
  </h1>
);
// react component
//function component
//classbased component

const Header = () => {
  //this is functional component it will react jsx or component ,can return react element also ie react.createElement(element)
  return (
    <h1>Namaster React component</h1>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Header());
