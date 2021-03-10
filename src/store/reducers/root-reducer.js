// redux
import {combineReducers} from "redux";

// reducers
import {taskReducer} from "./task-reducer/task-reducer";
import {userReducer} from "./user-reducer/user-reducer";

export const nameSpace = {
  TASKS: `TASKS`,
  USER: `USER`
};

export const reducer = combineReducers({
  [nameSpace.TASKS]: taskReducer,
  [nameSpace.USER]: userReducer
});

