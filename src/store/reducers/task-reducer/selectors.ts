import {nameSpace} from "../root-reducer";
import {ITask} from "../../../interfaces/task.interface";

export const getTasks = (state): Array<ITask> => state[nameSpace.TASKS].tasks;
