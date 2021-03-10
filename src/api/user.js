// axios instance
import {api} from "../axios";

export const checkAuthApi = (param) => {
  return api.get(`/users?id=${param}`).then((response) => {
    return Promise.resolve(response.data);
  }).catch((error) => {
    return Promise.reject(error);
  });
};

export const loginUserApi = (id) => {
  return api.patch(`/users/${id}`, {authorized: true});
};

export const findUserApi = (email) => {
  return api.get(`/users?email=${email}`);
};

export const logoutUserApi = (id) => {
  return api.patch(`/users/${id}`, {authorized: false});
};

export const registrationUserApi = (params) => {
  return api.post(`/users`, params);
};
