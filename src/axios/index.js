// axios
import axios from "axios";

const httpCode = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  NOT_FOUND: 404
};

const createApi = () => {
  const api = axios.create({
    baseURL: `http://localhost:3000`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    if (error.status === httpCode.UNAUTHORIZED) {
      console.error(error);

      throw error;
    }

    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export const api = createApi();
