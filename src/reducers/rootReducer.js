import { combineReducers } from "redux";

import lots from "./lotsReducer";
import user from "./userReducer";
import token from "./tokenReducer";

const combinedReducer = combineReducers({
  token,
  lots,
  user,
});

const rootReducer = (state, action) => combinedReducer(state, action);

export default rootReducer;
