// api
import {getTasksApi, addTaskApi} from "../../api/tasks";

// actions
import {toggleLoading, setTasksAction, addTaskAction} from "../actions/tasks";

export const getTasks = () => (dispatch, _getState) => {
  dispatch(toggleLoading());
  getTasksApi().then((response) => {
    dispatch(setTasksAction(response.data));
    dispatch(toggleLoading());
  });
};

export const addTask = (params) => (dispatch, _getState) => {
  dispatch(toggleLoading());
  addTaskApi(params).then((response) => {
    dispatch(addTaskAction(response.data));
    dispatch(toggleLoading());
  });
};
