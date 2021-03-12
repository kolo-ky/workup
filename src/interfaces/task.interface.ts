interface ITask {
  id: number,
  title: string,
  boardId: number,
  statusId: number,
  order: number,
  userId: number
}

export type {ITask}
