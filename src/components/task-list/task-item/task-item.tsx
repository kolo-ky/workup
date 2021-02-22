import React, {FC, useState} from 'react';
import PropTypes from 'prop-types';

// styles
import classnames from "classnames";
import style from "../../../assets/common-styles/comon.style.css";

// types
import type {ICommonTaskItem} from "../../interface/common-task-item.interface";

interface ITaskItemCh extends ICommonTaskItem {
  indentClassName: string
}

const TaskItem:FC<ITaskItemCh> = ({task, indentClassName}) => {
  const [isTaskEdit, toggleEditTask] = useState<boolean>(false);
  const [taskTitle, setTaskTitle] = useState<string>(task.title);

  const handleSetTaskTitle = ({target}) => {
    setTaskTitle(target.value);
  };

  const handleToggleTask = () => {
    if (isTaskEdit) {
      toggleEditTask(false);
    } else {
      toggleEditTask(true);
    }
  };

  return (
    <div className={classnames(
        style.taskBoardItem,
        style.task,
        indentClassName,
        isTaskEdit ? style.taskActive : null
    )}>
      <div className={classnames(style.taskBody)}>
        {
          isTaskEdit
            ?
            <input
              className={classnames(style.taskInput)}
              type="text"
              value={taskTitle}
              onChange={handleSetTaskTitle}
            />
            :
            <p className={classnames(style.taskView)}>{task.title}</p>
        }
      </div>
      <button
        className={classnames(style.taskEdit)}
        type="button"
        aria-label="Изменить"
        onClick={() => handleToggleTask()}
      />
    </div>
  );
};

export {TaskItem};
