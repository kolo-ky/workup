import {FC} from "react";
import {ITask} from "./task.interface";

interface IBoard {
  id: number,
  component: FC<{tasks: Array<ITask>, title: string, key: string}>,
  title: string
}

export type {IBoard};
