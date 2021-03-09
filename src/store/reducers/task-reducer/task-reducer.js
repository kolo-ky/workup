// actions
import {TaskActions} from "../../actions/tasks";

const initialState = {
  tasks: [],
  loading: false
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case TaskActions.SET_TASKS:
      return {...state, tasks: action.payload};
    case TaskActions.ADD_TASKS:
      return {...state, tasks: [...state.tasks, action.payload]};
    case TaskActions.MOVE_TASK:
      return {...state, tasks: state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          task.boardId = action.payload.boardId;
        }

        return task;
      })};
    case TaskActions.TOGGLE_LOADING:
      return {...state, loading: !state.loading};
  }
  return state;
};

export {taskReducer};
