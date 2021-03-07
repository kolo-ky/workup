// actions
import {ITaskAction, TaskActions} from "../../interfaces/task-action.interface";

export const setTasksAction = (payload): ITaskAction => {
  return {
    type: TaskActions.SET_TASKS,
    payload
  };
};

export const addTaskAction = (payload): ITaskAction => {
  return {
    type: TaskActions.ADD_TASKS,
    payload
  };
};

export const toggleLoading = (): ITaskAction => {
  return {
    type: TaskActions.TOGGLE_LOADING
  };
};
