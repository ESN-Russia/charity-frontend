import initialState from "./initialState";

export default function (state = initialState.bids, action) {
  switch (action.type) {
    case "BIDS_FETCHED":
      return action.bids;
    default:
      return state;
  }
}
