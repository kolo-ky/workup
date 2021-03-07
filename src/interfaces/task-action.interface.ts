import {ITask} from "./task.interface";

enum TaskActions {
  SET_TASKS = 'SET_TASKS',
  ADD_TASKS = 'ADD_TASKS',
  TOGGLE_LOADING = 'TOGGLE_LOADING'
}

interface ITaskActionSetTasks {
  type: TaskActions.SET_TASKS,
  payload: Array<ITask>
}

interface ITaskActionAddTasks {
  type: TaskActions.ADD_TASKS,
  payload: ITask
}

interface ITaskActionToggleLoading {
  type: TaskActions.TOGGLE_LOADING
}

type ITaskAction = ITaskActionSetTasks | ITaskActionAddTasks | ITaskActionToggleLoading;

export {ITaskAction, TaskActions}
