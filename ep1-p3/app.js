const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);

console.log(heading); // this heading is not a html element , it is an object. check the console.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //this render method will take this object and convert to h1 tag and put in the html. check the elements in inspection tab
