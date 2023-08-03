import React from "react"; //refers to react in our node_modules
import ReactDOM from "react-dom/client";

//React Elements
//React.createElement => React Element (JS object) =>Rendered on DOM

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Replaced the data"
);

console.log(heading);

//JSX is not HTML
//JSX => Babel transpiles it to React.createElement => React Element (JS object) =>Rendered on DOM

const jsxHeading = (
  <h1 className="head" tabIndex="5">
    Replaced the data using JSX
  </h1>
);

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);

root.render(jsxHeading);
