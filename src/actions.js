import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "//esnrussia-charity.herokuapp.com";

const apiGet = (url, config = {}) => axios.get(`${API_URL}/api/${url}`, config);

export const fetchLots = async () => {
  const res = await apiGet("lot-list/");

  console.log("ASDBG fetchLots", res.data);

  window.store.dispatch({
    type: "FETCHED_LOTS",
    lots: res.data,
  });
};
