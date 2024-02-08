import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Question-1
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// Question-2
function MyApp() {
  return (
    <>
      <h1>Hello I am My APP</h1>
    </>
  );
}
// retuned JSX is converted to tree(object)
// ReactDOM.createRoot(document.getElementById("root")).render(<MyApp />);

// Question-3
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};
// Syntax of Object is not correct
// ReactDOM.createRoot(document.getElementById("root")).render(reactElement);

// Question-4
const anotherElement = (
  <a href="https://google.com" target="_blank">
    Google
  </a>
);
// anotherElement is converted to object correctly
// ReactDOM.createRoot(document.getElementById("root")).render(anotherElement);

// Question-5
const newReactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "Google Chale"
);
console.log(newReactElement);
// Object is created by react itself
// ReactDOM.createRoot(document.getElementById("root")).render(newReactElement);

// Question-6
const text = " Chaloge Na";
const evaluatedExpressionReactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "Google Chale",
  text
);
console.log(newReactElement);
// Object is created by react itself
ReactDOM.createRoot(document.getElementById("root")).render(
  evaluatedExpressionReactElement
);
