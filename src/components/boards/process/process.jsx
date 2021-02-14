import React from 'react';
import PropTypes from 'prop-types';

// styles
import style from '../../../assets/common-styles/comon.style.css';
import processStyle from './process.module.css';
import classnames from 'classnames';

// components
import TaskList from "../../task-list/task-list";
import TaskEmpty from "../../task-empty/task-empty";

// types
import task from "../../../types/task";

const Process = ({tasks, title}) => {
  return (
    <article className={classnames(style.taskBoardGroup, processStyle.taskBoardGroupProcessing)}>
      <h3 className={classnames(style.taskBoardGroupHeading, processStyle.taskBoardGroupHeadingProcessing)}>{title}</h3>
      <TaskList tasks={tasks}>
        <TaskEmpty />
      </TaskList>
    </article>
  );
};

Process.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape(task)),
  title: PropTypes.string.isRequired
};

export default Process;
