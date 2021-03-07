// redux
import {combineReducers} from "redux";
// reducers
import {taskReducer} from "./task-reducer/task-reducer";

export const nameSpace = {
  TASKS: `TASKS`
};

export const reducer = combineReducers({
  [nameSpace.TASKS]: taskReducer
});

