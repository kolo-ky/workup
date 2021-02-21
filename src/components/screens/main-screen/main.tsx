import React, {FC, Fragment, useState} from "react";

// hocs
import {withMainLayout} from "../../../hocs/with-main-layout";

// style
import style from './main-module.css';
import classnames from 'classnames';

// types
import type {IBoard} from "../../interface/board.interface";
import type {ITask} from "../../interface/task.interface";

// components
import {AddTask} from "../../add-task";
import boardsArray from '../../boards/boards';

// mocha
import mochaTasks from '../../../mocha/tasks';

const Main: FC = () => {
  const [tasks, updateTasks] = useState<Array<ITask>>(mochaTasks.slice());

  const getTasks = (id: number) => {
    return tasks.filter((task) => task.boardId === id);
  };

  const handleAddTask = (task: ITask) => {
    updateTasks((prevState) => ([
      ...prevState,
      task
    ]));
  };

  const boards: Array<IBoard> = boardsArray;

  return (
    <Fragment>
      <AddTask addTask={handleAddTask}/>
      <section className={classnames(style.taskBoard)}>
        {boards.map((board: IBoard) => {
          const Component = board.component;
          return (
            <Component tasks={getTasks(board.id)} title={board.title} key={`$board-${board.id}`}/>
          )})
        }
      </section>
    </Fragment>
  );
};
const MainScreen = withMainLayout(Main);
export {MainScreen};
