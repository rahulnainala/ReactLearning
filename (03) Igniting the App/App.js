import React from "react"; //refers to react in our node_modules
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    [
      React.createElement("h1", {}, "This is a new code of line "),
      React.createElement("h2", {}, "I'm an h2 tag"),
    ] //to create a sibling
  ),
  React.createElement(
    "div",
    { id: "child2" },
    [
      React.createElement("h1", {}, "I'm an h1 tag child2"),
      React.createElement("h2", {}, "I'm an h2 tag child2"),
    ] //to create a sibling
  ),
]);

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
