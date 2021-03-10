import {ITask} from "./task.interface";
import {DragEvent} from "react";

interface ICommonTaskItem {
  task: ITask,
  boardId: number,
  key: string,
  dragStart(task: ITask):void,
  dragEnd(event: DragEvent<HTMLDivElement>):void
  drop(event: DragEvent<HTMLDivElement>, task: ITask, boardId: number):void,
  dragOver(event: DragEvent<HTMLDivElement>):void
}

export {ICommonTaskItem};
