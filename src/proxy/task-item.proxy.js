import React from "react";
import PropTypes from "prop-types";

// components
import TaskItem from '../components/task-list/task-item/task-item';

// style
import style from "../assets/common-styles/comon.style.css";

// types
import task from "../types/task";

const TASK_COLOR_BY_BOARD_ID = {
  0: `taskBacklog`,
  1: `taskProcessing`,
  2: `taskDone`,
  3: `taskBasket`,
};

const TaskItemProxy = (props) => {
  const getClassName = () => {
    return style[TASK_COLOR_BY_BOARD_ID[props.task.boardId]];
  };

  return (
    <TaskItem indentClassName={getClassName()} {...props} />
  );
};

TaskItemProxy.propTypes = {
  task: PropTypes.shape(task),
};

export default TaskItemProxy;
