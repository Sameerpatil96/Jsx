// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1> SAmeer Patil </h1>, document.getElementById("root"));

// ReactDOM.render( React.createElement("h1",
//  null, " SAmeer Patil "),//bable
//  document.getElementById("root"));

var h1 = document.createElement("h1");
h1.innerHTML = "Sameer Patil"; // using js
document.getElementById("root").appendChild(h1);
