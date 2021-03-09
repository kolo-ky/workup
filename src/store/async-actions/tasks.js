// api
import {getTasksApi, addTaskApi, putTaskApi} from "../../api/tasks";

// actions
import {toggleLoading, setTasksAction, addTaskAction, moveTaskAction} from "../actions/tasks";

export const fetchTasks = () => (dispatch, _getState) => {
  dispatch(toggleLoading());
  getTasksApi().then((response) => {
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
  return putTaskApi(params).then(() => {
    dispatch(moveTaskAction(params.data));
    return Promise.resolve();
  }).catch(() => {
    return Promise.reject();
  });
};
