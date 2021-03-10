// api
import {getTasksApi, addTaskApi, putTaskApi} from "../../api/tasks";

// actions
import {toggleLoading, setTasksAction, addTaskAction, moveTaskAction} from "../actions/tasks";

export const fetchTasks = (user) => (dispatch, _getState) => {
  dispatch(toggleLoading());
  getTasksApi(user.id).then((response) => {
    dispatch(setTasksAction(response.data));
    dispatch(toggleLoading());
  });
};

export const fetchAddTask = (params) => (dispatch) => {
  return addTaskApi(params).then((response) => {
    dispatch(addTaskAction(response.data));
    return Promise.resolve();
  }).catch(() => {
    return Promise.reject();
  });
};

export const fetchPutTask = (params) => (dispatch) => {
  dispatch(moveTaskAction(params.data));
  return putTaskApi(params).then(() => {
    return Promise.resolve();
  }).catch(() => {
    return Promise.reject();
  });
};