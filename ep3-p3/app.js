import React from "react";
import ReactDOM from "react-dom/client";

//React element => Object =>WHen we render to the DOM then it becomes an html element

//jsx- is not HTML in javascript. it is HTML or XML like syntax
// JSX (traspiled before it reached the JS engine)- PARCEL- Babel
//Babel is a package used to traspile the JSX code to a code that react understand
// JSX => React.createElement => ReactElement-js Object =>HTML elament(render) -Babel is doing this.

const jsxHeading = <h1 className="head">Namaste React using JSX 🚀</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
// if we wanna write JSX in multiple line the wrapp it inside a ()
