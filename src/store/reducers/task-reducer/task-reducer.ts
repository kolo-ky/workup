// types
import type {ITaskState} from '../../../interfaces/task-state.interface';
import {ITaskAction, TaskActions} from '../../../interfaces/task-action.interface';

const initialState: ITaskState = {
  tasks: [],
  loading: false
};

const taskReducer = (state = initialState, action: ITaskAction): ITaskState => {
  switch (action.type) {
    case TaskActions.SET_TASKS:
      return {...state, tasks: action.payload};
    case TaskActions.ADD_TASKS:
      return {...state, tasks: [...state.tasks, action.payload]};
    case TaskActions.TOGGLE_LOADING:
      return {...state, loading: !state.loading};
  }
  return state;
};

export {taskReducer};
