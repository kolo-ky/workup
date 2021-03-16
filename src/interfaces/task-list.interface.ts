import {ITask} from "./task.interface";
import {ReactNode} from "react";

interface ITaskList {
  tasks: Array<ITask>,
  droppedTask: ITask,
  setTask(task: ITask): void,
  boardId: number,
  children?: ReactNode
}

export {ITaskList};
