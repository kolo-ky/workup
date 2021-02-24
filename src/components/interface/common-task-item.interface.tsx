import {ITask} from "./task.interface";

interface ICommonTaskItem {
  task: ITask,
  key: string,
  dragStart(task: ITask):void,
  dragEnd(task: ITask):void
}

export {ICommonTaskItem};
