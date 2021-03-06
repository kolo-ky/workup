import {SET_TASKS, ADD_TASKS} from '../actions/tasks';

const initialState = {
  tasks: []
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS:
      return {...state, tasks: [...state.tasks, ...action.payload]};
    case ADD_TASKS:
      return {...state, tasks: [...state.tasks, action.payload]};
  }
  return state;
};

export {taskReducer};
