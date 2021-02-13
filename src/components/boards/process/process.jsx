import React from "react";

// styles
import style from '../../../assets/common-styles/comon.style.css';
import processStyle from './process.module.css';
import classnames from 'classnames';

// components
import TaskList from "../../task-list/task-list";
import TaskEmpty from "../../task-empty/task-empty";

const Process = ({tasks}) => {
  return (
    <article className={classnames(style.taskBoardGroup, processStyle.taskBoardGroupProcessing)}>
      <h3 className={classnames(style.taskBoardGroupHeading, processStyle.taskBoardGroupHeadingProcessing)}>В процессе</h3>
      <TaskList tasks={tasks}>
        <TaskEmpty />
      </TaskList>
    </article>
  );
};

export default Process;
