import { combineReducers } from "redux";

const combinedReducer = combineReducers({
});

const rootReducer = (state, action) => combinedReducer(state, action);

export default rootReducer;
