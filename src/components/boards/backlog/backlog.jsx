import React from "react";
import PropTypes from 'prop-types';

// styles
import style from '../../../assets/common-styles/comon.style.css';
import backlogStyle from './backlog.module.css';
import classnames from 'classnames';

// components
import TaskList from '../../task-list/task-list';

// types
import task from '../../../types/task';

const Backlog = ({tasks, title}) => {
  return (
    <article className={classnames(style.taskBoardGroup, backlogStyle.taskBoardGroupBacklog)}>
      <h3 className={classnames(style.taskBoardGroupHeading, backlogStyle.taskBoardGroupHeadingBacklog)}>{title}</h3>
      <TaskList tasks={tasks}/>
    </article>
  );
};

Backlog.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape(task)),
  title: PropTypes.string.isRequired
};

export default Backlog;
