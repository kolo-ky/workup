import React, {FC, Fragment} from "react";

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

// mobx
import {observer} from "mobx-react-lite";

// store
import store from '../../../store/tasks';

const Main: FC = observer(() => {

  const getTasks = (id: number) => {
    return store.getBoardTasks(id);
  };

  const handleAddTask = (task: ITask) => {
    store.addTask(task);
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
});

const MainScreen = withMainLayout(Main);
export {MainScreen};
