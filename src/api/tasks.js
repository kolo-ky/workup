// axios instance
import {api} from "../axios";

export const getTasksApi = (userId) => {
  return api.get(`/tasks?userId=${userId}`);
};

export const addTaskApi = (params) => {
  return api.post(`/tasks`, params);
};

export const putTaskApi = (params) => {
  return api.put(`/tasks/${params.id}`, params.data);
};

export const patchTaskApi = (params) => {
  return api.patch(`/tasks/${params.id}`, params.data);
};
