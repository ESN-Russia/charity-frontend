import { combineReducers } from "redux";

import lots from "./lotsReducer";
import user from "./userReducer";
import token from "./tokenReducer";
import bids from "./bidsReducer";

const combinedReducer = combineReducers({
  token,
  lots,
  user,
  bids,
});

const rootReducer = (state, action) => combinedReducer(state, action);

export default rootReducer;
