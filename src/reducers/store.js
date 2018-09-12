/* eslint-disable */
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducer";
import initialState from "./initialState";

const enhancers = [];
const middleware = [];

const devToolsExtension = window.devToolsExtension;

if (typeof devToolsExtension === "function") {
  enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = (window.store = createStore(rootReducer, initialState, composedEnhancers));

export default store;
