import React from "react";

// styles
import style from '../../../assets/common-styles/comon.style.css';
import doneStyle from './done.module.css';
import classnames from 'classnames';

// components
import TaskList from "../../task-list/task-list";
import TaskEmpty from "../../task-empty/task-empty";

const Done = ({tasks, title}) => {
  return (
    <article className={classnames(style.taskBoardGroup, doneStyle.taskBoardGroupDone)}>
      <h3 className={classnames(style.taskBoardGroupHeading, doneStyle.taskBoardGroupHeadingDone)}>{title}</h3>
      <TaskList tasks={tasks}>
        <TaskEmpty />
      </TaskList>
    </article>
  );
};

export default Done;
