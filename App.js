import React from "react";
import ReactDOM from "react-dom/client";

//React components- class and functional

const HeadingComponents = () => {
  return (
    <div id="container">
      <h1 className="heading">Namaste React Functional Components 🚀</h1>
    </div>
  );
};

const title = (
  <h1 className="head">{<HeadingComponents />}Namaste React using JSX 🚀</h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(title);
