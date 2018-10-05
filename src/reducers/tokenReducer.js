import initialState from "./initialState";

export default function (state = initialState.token, action) {
  switch (action.type) {
    case "USER_LOGIN":
      localStorage.setItem("token", action.token);
      console.log("ASDBG token set", action.token);
      return action.token;
    case "USER_LOGOUT":
      localStorage.removeItem("token");
      console.log("ASDBG token remove");
      return "";
    default:
      return state;
  }
}
