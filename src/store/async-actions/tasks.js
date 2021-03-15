// api
import {getTasksApi, addTaskApi, putTaskApi, patchTaskApi} from "../../api/tasks";

// actions
import {toggleLoading, setTasksAction, addTaskAction, removeSnapshotAction, updateTaskAction} from "../actions/tasks";

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

export const fetchUpdateTask = (params) => (dispatch) => {
  return patchTaskApi(params).then(() => {
    dispatch(updateTaskAction(params));
    return Promise.resolve();
  }).catch(() => {
    return Promise.reject();
  });
};

export const fetchSnapshot = () => async (dispatch, getState) => {
  const {TASKS} = getState();
  // eslint-disable-next-line no-unused-vars
  for (const snapshot of TASKS.snapshots) {
    await Promise.all(
        snapshot.map((task) => {
          return putTaskApi({id: task.id, data: task});
        })
    );
    dispatch(removeSnapshotAction());
  }
};
