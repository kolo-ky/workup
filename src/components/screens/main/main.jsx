import React, {Fragment} from "react";

// layout
import {WithMainLayout} from "../../../hocs/with-main-layout";

// style
import style from './main-module.css';
import classnames from 'classnames';

// components
import Backlog from '../../../components/boards/backlog/backlog';
import Process from '../../../components/boards/process/process';
import Done from '../../../components/boards/done/done';
import Trash from '../../../components/boards/trash/trash';
import AddTask from "../../add-task/add-task";

const Main = () => {
  return (
    <Fragment>
      <AddTask />
      <section className={classnames(style.taskBoard)}>
        <Backlog />
        <Process />
        <Done />
        <Trash />
      </section>
    </Fragment>
  );
};

export default WithMainLayout(Main);
