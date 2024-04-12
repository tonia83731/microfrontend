import React from "react";
import ReactDom from "react-dom";
import App from "./app.js";

// Mount function to start up the app
const mount = (el) => {
  ReactDom.render(<App />, el);
};
// development and in isolation call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  // console.log(devRoot);
  if (devRoot) {
    mount(devRoot);
  }
}
// running through container and export mount function
export { mount };
