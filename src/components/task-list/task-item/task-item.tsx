import React, {DragEvent, FC, useState} from 'react';
import PropTypes from 'prop-types';

// styles
import classnames from "classnames";
import style from "../../../assets/common-styles/comon.style.css";

// types
import type {ICommonTaskItem} from "../../interface/common-task-item.interface";
import {ITask} from "../../interface/task.interface";

interface ITaskItem extends ICommonTaskItem {
  indentClassName: string
}

const TaskItem:FC<ITaskItem> = ({task, dragStart, dragEnd, indentClassName}) => {
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

  const handleDragStart = (event: DragEvent<HTMLDivElement>, task: ITask) => {
    dragStart(task);
  };

  const handleDragEnd = (event: DragEvent<HTMLDivElement>,task: ITask) => {
    dragEnd(task);
  };

  return (
    <div
      className={classnames(
        style.taskBoardItem,
        style.task,
        indentClassName,
        isTaskEdit ? style.taskActive : null
    )}
      draggable="true"
      onDragStart={(event) => handleDragStart(event, task)}
      onDragEnd={(event) => handleDragEnd(event, task)}
    >
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
