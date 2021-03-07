import {TaskActions} from "../../interfaces/task-action.interface";

export const setTasksAction = (payload) => {
  return {
    type: TaskActions.SET_TASKS,
    payload
  };
};

export const addTaskAction = (payload) => {
  return {
    type: TaskActions.ADD_TASKS,
    payload
  };
};

export const toggleLoading = () => {
  return {
    type: TaskActions.TOGGLE_LOADING
  };
};
