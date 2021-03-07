// api
import {getTasksApi, addTaskApi} from "../../api/tasks";

// actions
import {toggleLoading, setTasksAction, addTaskAction} from "../actions/tasks";

export const fetchTasks = () => (dispatch, _getState) => {
  dispatch(toggleLoading());
  getTasksApi().then((response) => {
    dispatch(setTasksAction(response.data));
    dispatch(toggleLoading());
  });
};

export const fetchAddTask = (params) => (dispatch, _getState) => {
  addTaskApi(params).then((response) => {
    dispatch(addTaskAction(response.data));
  });
};
