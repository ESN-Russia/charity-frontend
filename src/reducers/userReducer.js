import initialState from "./initialState";

export default function (state = initialState.user, action) {
  switch (action.type) {
    case "USER_LOGIN":
    case "USER_FETCHED":
      console.log("ASDBG", action.user);
      return action.user;
    case "USER_LOGOUT":
      console.log("ASDBG user logged out");
      return {};
    default:
      return state;
  }
}
