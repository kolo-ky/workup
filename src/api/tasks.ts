// axios instance
import {api} from "../axios";

// types
import {ITask} from "../interfaces/task.interface";

export const getTasksApi = (): Promise<Array<ITask>> => {
  return api.get(`/tasks`);
};

export const addTaskApi = (params: ITask): Promise<any> => {
  return api.post(`/tasks`, params);
};
