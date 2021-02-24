import {ITask} from "./task.interface";

interface IBoards {
  tasks: Array<ITask>,
  title: string,
  boardId: number
}

export {IBoards};
