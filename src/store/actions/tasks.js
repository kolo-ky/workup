// actions
export const TaskActions = {
  SET_TASKS: `SET_TASKS`,
  ADD_TASKS: `ADD_TASKS`,
  MOVE_TASK: `MOVE_TASK`,
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

export const toggleLoading = () => {
  return {
    type: TaskActions.TOGGLE_LOADING
  };
};
