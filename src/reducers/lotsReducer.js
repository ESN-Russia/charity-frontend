import initialState from "./initialState";

export default function (state = initialState.lots, action) {
  switch (action.type) {
    case "FETCHED_LOTS":
      console.log("ASDBG", action.lots);
      return action.lots;
    default:
      return state;
  }
}
