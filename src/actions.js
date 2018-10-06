import axios from "axios";
import _ from "lodash";

const API_URL = process.env.REACT_APP_API_URL || "//esnrussia-charity.herokuapp.com";

const getAuthHeader = () => {
  const { token } = window.store.getState();
  return token ? { Authorization: `Token ${window.store.getState().token}` } : {};
};
const apiGet = url => axios.get(`${API_URL}/api/${url}`, { headers: getAuthHeader() });
const apiPost = (url, data) =>
  axios.post(`${API_URL}/api/${url}`, data, { headers: getAuthHeader() });

export const fetchLots = async () => {
  try {
    const res = await apiGet("lot-list/");

    console.log("ASDBG fetchLots", res.data);

    window.store.dispatch({
      type: "FETCHED_LOTS",
      lots: res.data,
    });
  } catch (error) {
    console.log("ASDBG fetchLots", error.response);
    if (error.response.status === 401) {
      window.store.dispatch({ type: "USER_LOGOUT" }).then(() => fetchLots());
    }
  }
};

export const fetchUserInfo = async () => {
  apiGet("auth/info/")
    .then(res =>
      window.store.dispatch({
        type: "USER_FETCHED",
        user: res.data,
      }))
    .catch(err => console.warn("ASDBG userinfo falied", err.response));
};

export const fetchUserBids = async () => {
  apiGet("bids/")
    .then(res =>
      window.store.dispatch({
        type: "BIDS_FETCHED",
        bids: _.orderBy(res.data, "created_at"),
      }))
    .catch(err => console.warn("ASDBG fetchUserBids", err.response));
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

export const register = async (username, name) => apiPost("auth/register/", { username, name });

export const resetPassword = async username => apiPost("auth/reset_password/", { username });
