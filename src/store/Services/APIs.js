import axios from "axios";

const API = axios.create({
  baseURL: "https://api.covid19api.com/",
  headers: { accept: "application/json", "content-type": "application/json" },
  responseType: "json",
  validateStatus: (status) => {
    return status < 400 && status >= 200;
  },
});

API.interceptors.request.use(
  (request) => {
    return request;
  },
  (err) => {
    return Promise.reject(err);
  }
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default API;