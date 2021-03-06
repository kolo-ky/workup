export const SET_TASKS = `SET_TASKS`;
export const ADD_TASKS = `ADD_TASKS`;

export const getTasks = (payload) => {
  return {
    type: SET_TASKS,
    payload
  };
};

export const addTask = (payload) => {
  return {
    type: ADD_TASKS,
    payload
  };
};
