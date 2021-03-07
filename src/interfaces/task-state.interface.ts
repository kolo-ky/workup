import {ITask} from "./task.interface";

interface ITaskState {
  tasks: Array<ITask>,
  loading: boolean
}

export type {ITaskState};
