# Namaste React

# Parcel

-Dev Build
-Local Server
-HMR= Hot module replacement
-File Watching Algorithm- written in C++
-Caching-Faster Build
-Image Optimization
-Ninification
-Bundling
-Compress
-Consistent Hashing
-Code Spliting
-Differential Buntling - Support older browser
-Diagnostics
-Error Handling
-Https
-Tree Shaking - Remove unused codes
-Different dev and production(prod) bundle

React Elements
React.createElement => Object => HTMLElement(render)

const heading = React.createElement(
"h1",
{ id: "heading" },
"Namaste React 🚀"
);

JSX - javascript syntax to create react element
jsx is not HTML. It is HTML/XML like syntax
JSX code will transpiled befor it reaches the JS engine(babel)
const Title = () => <h1 className="head">Namaste React using JSX</h1>; //js won't understand this code, this is not a valid js
