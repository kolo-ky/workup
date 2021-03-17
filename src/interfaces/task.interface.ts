interface ITask {
  id: number,
  title: string,
  boardId: number,
  statusId: number,
  order: number,
  userId: number,
  createdAt: string | null,
  processAt: string | null,
  doneAt: string | null
}

export type {ITask}
