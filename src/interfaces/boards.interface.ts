import {ITask} from "./task.interface";

interface IBoards {
  tasks: Array<ITask>,
  droppedTask: ITask | null,
  setTask(task: ITask): void,
  title: string,
  boardId: number
}

export {IBoards};
