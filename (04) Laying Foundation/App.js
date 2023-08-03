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

//JSX code :
const jsxHeading = (
  <h1 className="head" tabIndex="5">
    Replaced the data using JSX
  </h1>
);

//React Functional Component
const Headingcomponent2 = () => {
  return <h1 className="heading">Hello World using Functional Component</h1>;
};

const Title = () => <h2>React Code based on Babel</h2>;

//Industry Standard
//to call react element we use {} inside the component
const Headingcomponent = () => (
  <div id="container">
    {jsxHeading}
    {Title()}
    <Title></Title>
    <Title />
    <h1 className="heading">Hello World using Functional Component</h1>
  </div>
);

//console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);

//root.render(jsxHeading);

root.render(<Headingcomponent />);
