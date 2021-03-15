// actions
export const TaskActions = {
  SET_TASKS: `SET_TASKS`,
  ADD_TASKS: `ADD_TASKS`,
  UPDATE_TASK: `UPDATE_TASK`,
  MOVE_TASK: `MOVE_TASK`,
  ADD_SNAPSHOT: `ADD_SNAPSHOT`,
  REMOVE_SNAPSHOT: `REMOVE_SNAPSHOT`,
  REORDER_TASKS: `REORDER_TASKS`,
  TOGGLE_LOADING: `TOGGLE_LOADING`
};

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

export const moveTaskAction = (payload) => {
  return {
    type: TaskActions.MOVE_TASK,
    payload
  };
};

export const reorderTaskAction = (payload) => {
  return {
    type: TaskActions.REORDER_TASKS,
    payload
  };
};

export const updateTaskAction = (payload) => {
  return {
    type: TaskActions.UPDATE_TASK,
    payload
  };
};

export const addSnapshotAction = (payload) => {
  return {
    type: TaskActions.ADD_SNAPSHOT,
    payload
  };
};

export const removeSnapshotAction = () => {
  return {
    type: TaskActions.REMOVE_SNAPSHOT
  };
};

export const toggleLoading = () => {
  return {
    type: TaskActions.TOGGLE_LOADING
  };
};
