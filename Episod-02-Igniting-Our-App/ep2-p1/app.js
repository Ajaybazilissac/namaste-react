/* 

*   <div id="parent">
*       <div id="child">
*           <h1>I am H1 tag</h1>
*           <h2>I am H2 tag</h2>
*       </div>
*       <div id="child">
*           <h1>I am H1 tag</h1>
*           <h2>I am H2 tag</h2>
*       </div>
*   </div>
*  
*   ReactElement(object) =>Html(Browser understands)
*   react object becom an HTML that browser understands
*   if we need to add siblings then keep the child in an array and add as many as we can with a comma','
*/
const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "I am H1 tag"),
      React.createElement("h2", {}, "I am H2 tag"),
    ]),
  ],
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h2", {}, "I am H2 tag"),
  ])
);

console.log(parent); // this heading is not a html element , it is an object. check the console.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //this render method will take this object and convert to h1 tag and put in the html. check the elements in inspection tab
