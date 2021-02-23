// mobx
import {makeAutoObservable} from "mobx";

// types
import type {ITask} from "../components/interface/task.interface";

// mocks
import mocksTasks from "../mocha/tasks";

class Tasks {
  tasks: Array<ITask> = mocksTasks.slice();

  constructor() {
    makeAutoObservable(this);
  }

  addTask(payload: ITask) {
    this.tasks.push(payload);
  }

  getBoardTasks(id: number) {
    return this.tasks.filter((task) => task.boardId === id);
  }
}

export default new Tasks();
