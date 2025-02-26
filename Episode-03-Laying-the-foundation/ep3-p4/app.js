import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 className="head">Namaste React using JSX 🚀</h1>;

//React Components
// Class Based Components - old way
// Functional Components - new way

//React Functional Components is just a JS functionm- A JS function that return a React element
//name it with a capital letter first

//This code below is component composition- putting one component inside another component

const Name = () => {
  return (
    <div>
      <h2>My name is Ajay</h2>
      <Title />
    </div>
  );
};

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <Name />
    <h1 className="heading">Namaste React Functional Component </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
