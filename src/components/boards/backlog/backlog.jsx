import React from "react";

// styles
import style from '../../../assets/common-styles/comon.style.css';
import backlogStyle from './backlog.module.css';
import classnames from 'classnames';

// components
import TaskList from '../../task-list/task-list';

const Backlog = ({tasks}) => {
  return (
    <article className={classnames(style.taskBoardGroup, backlogStyle.taskBoardGroupBacklog)}>
      <h3 className={classnames(style.taskBoardGroupHeading, backlogStyle.taskBoardGroupHeadingBacklog)}>Бэклог</h3>
      <TaskList tasks={tasks}/>
    </article>
  );
};

export default Backlog;
