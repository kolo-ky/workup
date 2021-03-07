// axios instance
import {api} from "../axios";

export const getTasksApi = () => {
  return api.get(`/tasks`);
};

export const addTaskApi = (params) => {
  return api.post(`/tasks`, params);
};
