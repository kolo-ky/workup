import React, {FC} from "react";
import PropTypes from "prop-types";

// components
import {TaskItem} from '../components/task-list/task-item';

// style
import style from "../assets/common-styles/comon.style.css";

import type {ICommonTaskItem} from '../components/interface/common-task-item.interface';

const TASK_COLOR_BY_BOARD_ID = {
  0: `taskBacklog`,
  1: `taskProcessing`,
  2: `taskDone`,
  3: `taskBasket`,
};

const TaskItemProxy: FC<ICommonTaskItem> = (props) => {
  const getClassName = ():string => {
    return style[TASK_COLOR_BY_BOARD_ID[props.task.boardId]];
  };

  return (
    <TaskItem indentClassName={getClassName()} {...props} />
  );
};

export {TaskItemProxy};
