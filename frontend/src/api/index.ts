import axios, { AxiosInstance } from "axios";
import { baseURL } from "@/consts";
import { Payload } from "@/types";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withXSRFToken = true;

const axiosCreateOptions = {
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
  timeout: 10000,
  withCredentials: true,
};

export const beforeRequestSent = (config) => {
  return config;
};
const onErrorRequest = () => {};
const onResponse = (response) => {
  return response;
};
const onErrorResponse = () => {};

const setupInterceptors = (instance: AxiosInstance): AxiosInstance => {
  instance.interceptors.request.use(beforeRequestSent, onErrorRequest);
  instance.interceptors.response.use(onResponse, onErrorResponse);
  return instance;
};

export const API = setupInterceptors(axios.create(axiosCreateOptions));

// API helpers
export const apiHelpers = {
  get(endpoint: string) {
    return API.get(endpoint).then((response) => {
      console.log("Got response for GET", endpoint, ": ", response.data);
      return response.data;
    });
  },
  patch(endpoint: string, data: Payload) {
    return API.patch(endpoint, data).then((response) => {
      console.log("Got response for PATCH", endpoint, ": ", response.data);
      return response.data;
    });
  },
  post(endpoint: string, data: Payload) {
    return API.post(endpoint, data).then((response) => {
      console.log("Got response for POST", endpoint, ": ", response.data);
      return response.data;
    });
  },
  delete(endpoint: string) {
    return API.delete(endpoint).then((response) => {
      console.log("Got response for DELETE", endpoint, ": ", response.data);
      return response.data;
    });
  },
};

// API requests
export const api = {

};
