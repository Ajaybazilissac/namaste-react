import React from "react";
import ReactDOM from "react-dom/client";

//React element => Object =>WHen we render to the DOM then it becomes an html element

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
