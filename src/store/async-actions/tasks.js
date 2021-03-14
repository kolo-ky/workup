// api
import {getTasksApi, addTaskApi, putTaskApi} from "../../api/tasks";

// actions
import {toggleLoading, setTasksAction, addTaskAction, moveTaskAction, reorderTaskAction} from "../actions/tasks";

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

export const fetchPutTask = (params) => (dispatch, getState) => {
  dispatch(moveTaskAction(params.newTask));
  dispatch(reorderTaskAction(params.newTask));
  const {TASKS} = getState();

  const tasksPromises = TASKS.tasks
    .filter((item) => item.boardId === params.newTask.boardId)
    .map((task) => putTaskApi({id: task.id, data: task}));

  return Promise.all(tasksPromises).then(() => {
    return Promise.resolve();
  }).catch((error) => {
    throw error;
  });
};
