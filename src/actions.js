import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "//esnrussia-charity.herokuapp.com";

const getAuthHeader = () => {
  const { token } = window.store.getState();
  return token ? { Authorization: `Token ${window.store.getState().token}` } : {};
};
const apiGet = url => axios.get(`${API_URL}/api/${url}`, { headers: getAuthHeader() });
const apiPost = (url, data) =>
  axios.post(`${API_URL}/api/${url}`, data, { headers: getAuthHeader() });

export const fetchLots = async () => {
  const res = await apiGet("lot-list/");

  console.log("ASDBG fetchLots", res.data);

  window.store.dispatch({
    type: "FETCHED_LOTS",
    lots: res.data,
  });
};

export const login = async (username, password) => {
  apiPost("auth/login/", { username, password })
    .then((res) => {
      console.log("ASDBG res", res);
      window.store.dispatch({
        type: "USER_LOGIN",
        token: res.data.token,
        user: res.data.user,
      });
    })
    .catch(err => console.log("ASDBG err", err.response));
};

export const logout = async () => {
  apiPost("auth/logout/", {})
    .then((res) => {
      console.log("ASDBG res", res);
      window.store.dispatch({
        type: "USER_LOGOUT",
      });
    })
    .catch(err => console.log("ASDBG err", err.response));
};
