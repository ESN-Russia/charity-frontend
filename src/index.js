import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "semantic-ui-css/semantic.min.css";
import "./index.css";

import App from "./App";
import { unregister } from "./registerServiceWorker";
import store from "./reducers/store";

unregister(); // WTF

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root"),
);

if (module.hot) {
  module.hot.accept();
}
