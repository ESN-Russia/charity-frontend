import initialState from "./initialState";

export default function (state = initialState.registerModal, action) {
  switch (action.type) {
    case "SHOW_REGISTER":
      return "register";
    case "SHOW_PASSWORD_RESTORE":
      return "password_restore";
    case "HIDE_REGISTER_MODAL":
      return null;
    default:
      return state;
  }
}
