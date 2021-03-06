import React, {FC, Fragment} from "react";

// style
import style from './main-module.css';
import classnames from 'classnames';

// types
import type {IBoard} from "../../interface/board.interface";
import type {ITask} from "../../interface/task.interface";

// components
import {AddTask} from "../../add-task";
import boardsArray from '../../boards/boards';
import {MainLayout} from "../../layouts/main-layout";

const Main: FC = () => {

  const getTasks = (id: number) => {
    return [];
  };

  const handleAddTask = (task: ITask) => {
    console.log(task);
  };

  const boards: Array<IBoard> = boardsArray;

  return (
    <MainLayout>
      <Fragment>
        <AddTask addTask={handleAddTask}/>
        <section className={classnames(style.taskBoard)}>
          {boards.map((board: IBoard) => {
            const Component = board.component;
            return (
              <Component tasks={getTasks(board.id)} boardId={board.id} title={board.title} key={`$board-${board.id}`}/>
            )})
          }
        </section>
      </Fragment>
    </MainLayout>
  );
};

export {Main as MainScreen};
