import React, {FC} from "react";
import PropTypes from "prop-types";

// components
import {TaskItem} from '../../components/task-list/task-item';

// style
import style from "../../assets/common-styles/comon.style.css";

import type {ICommonTaskItem} from '../../interfaces/common-task-item.interface';

enum TaskColor {
  taskBacklog,
  taskProcessing,
  taskDone,
  taskBasket,
}

const TaskItemProxy: FC<ICommonTaskItem> = (props) => {
  const getClassName = ():string => {
    return style[TaskColor[props.task.boardId]];
  };

  return (
    <TaskItem indentClassName={getClassName()} {...props} />
  );
};

export {TaskItemProxy};
