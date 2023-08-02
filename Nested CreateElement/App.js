/**
 *
 * <div id="parent">
 *          <div id="child">
 *              <h1>i'm an H1 Tag</h1>
 *              <h2>i'm an H2 Tag</h2>  to create a sibling
 *          </div>
 * *          <div id="child2">
 *              <h1>i'm an H1 Tag</h1>
 *              <h2>i'm an H2 Tag</h2>  to create a sibling
 *          </div>
 * </div>
 *
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    [
      React.createElement("h1", {}, "I'm an h1 tag"),
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

/**codes a bit untidy due to which we have a JSX
 * which exists to make the above code understable and easy to code. */
