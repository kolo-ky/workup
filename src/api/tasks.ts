// axios instance
import {api} from "../axios";

// types
import {ITask} from "../interfaces/task.interface";

interface ITaskApiResponse {
  data: Array<ITask>
}

export const getTasksApi = (): Promise<ITaskApiResponse> => {
  return api.get(`/tasks`);
};

export const addTaskApi = (params: ITask): Promise<any> => {
  return api.post(`/tasks`, params);
};
