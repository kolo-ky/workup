// actions
import {TaskActions} from "../../actions/tasks";

const initialState = {
  tasks: [],
  snapshots: [],
  loading: false
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case TaskActions.SET_TASKS:
      return {...state, tasks: action.payload};
    case TaskActions.UPDATE_TASK:
      return {...state, tasks: state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          task.title = action.payload.data.title;
        }

        return task;
      })};
    case TaskActions.REORDER_TASKS:
      const task = action.payload;
      const reorderedTasks = state.tasks.map((item) => {
        if (task.boardId === item.boardId) {
          if (task.order <= item.order && task.id !== item.id) {
            item.order += 1;
          }
        }

        return item;
      });
      return {...state, tasks: [...reorderedTasks]};
    case TaskActions.ADD_TASKS:
      return {...state, tasks: [...state.tasks, action.payload]};
    case TaskActions.MOVE_TASK:
      return {...state, tasks: state.tasks.map((item) => {
        if (item.id === action.payload.id) {
          item = {...item, ...action.payload};
        }

        return item;
      })};
    case TaskActions.ADD_SNAPSHOT:
      return {...state, snapshots: [...state.snapshots, action.payload]};
    case TaskActions.REMOVE_SNAPSHOT:
      return {...state, snapshots: state.snapshots.slice(1)};
    case TaskActions.TOGGLE_LOADING:
      return {...state, loading: !state.loading};
  }
  return state;
};

export {taskReducer};
