// actions
export const TaskActions = {
  SET_TASKS: `SET_TASKS`,
  ADD_TASKS: `ADD_TASKS`,
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

export const toggleLoading = () => {
  return {
    type: TaskActions.TOGGLE_LOADING
  };
};
