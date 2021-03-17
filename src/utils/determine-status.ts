import {ITask} from "../interfaces/task.interface";
import {BoardAt} from "../components/boards/boards";
import {fns} from "./fns";

export const determineStatus = (task: ITask, boardId: number): ITask => {
  if (BoardAt.get(boardId)) {
    task[BoardAt.get(boardId)] = fns.getNow();
  }

  BoardAt.forEach((value, key) => {
    if (task.boardId < key) {
      task[value] = null;
    }

    if (task.boardId > key && !task[value]) {
      task[value] = fns.getNow();
    }
  });

  return task;
};
