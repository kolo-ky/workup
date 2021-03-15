// redux
import {combineReducers} from "redux";

// reducers
import {taskReducer} from "./task-reducer/task-reducer";
import {userReducer} from "./user-reducer/user-reducer";
import {messageReducer} from "./message-reducer/message-reducer";

export const nameSpace = {
  TASKS: `TASKS`,
  USER: `USER`,
  MESSAGES: `MESSAGES`
};

export const reducer = combineReducers({
  [nameSpace.TASKS]: taskReducer,
  [nameSpace.USER]: userReducer,
  [nameSpace.MESSAGES]: messageReducer
});

