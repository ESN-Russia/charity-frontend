import { combineReducers } from "redux";

import lots from "./lotsReducer";

const combinedReducer = combineReducers({
  lots,
});

const rootReducer = (state, action) => combinedReducer(state, action);

export default rootReducer;
