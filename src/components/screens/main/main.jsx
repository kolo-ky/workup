import React, {Fragment, useState} from "react";

// hocs
import {withMainLayout} from "../../../hocs/with-main-layout";

// style
import style from './main-module.css';
import classnames from 'classnames';

// components
import {AddTask} from "../../add-task/";
import boards from '../../boards/boards';

// mocha
import mochaTasks from '../../../mocha/tasks';

const Main = () => {
  const [tasks, updateTasks] = useState(mochaTasks.slice());
  const getTasks = (id) => {
    return tasks.filter((task) => task.boardId === id);
  };

  return (
    <Fragment>
      <AddTask />
      <section className={classnames(style.taskBoard)}>
        {
          boards.map((board) => (
            <board.component tasks={getTasks(board.id)} title={board.title} key={`$board-${board.id}`}/>
          ))
        }
      </section>
    </Fragment>
  );
};

export default withMainLayout(Main);
