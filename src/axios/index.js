// axios
import axios from "axios";

// actions
import {requiredAuthAction} from "../store/actions/user";

const createApi = (onAuthorized) => {
  const api = axios.create({
    baseURL: `http://localhost:3000`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    onAuthorized();
    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export const api = createApi(() => requiredAuthAction(false));
