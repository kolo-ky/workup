import React, {ChangeEvent, DragEvent, FC, useState, memo} from 'react';

// styles
import classnames from "classnames";
import style from "../../../assets/common-styles/comon.style.css";

// types
import type {ICommonTaskItem} from "../../../interfaces/common-task-item.interface";

interface ITaskItem extends ICommonTaskItem {
  indentClassName: string
}

const TaskItem:FC<ITaskItem> = (props) => {
  const [isTaskEdit, toggleEditTask] = useState<boolean>(false);
  const [taskTitle, setTaskTitle] = useState<string>(props.task.title);

  const handleSetTaskTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };

  const handleToggleTask = () => {
    if (isTaskEdit) {
      toggleEditTask(false);
    } else {
      toggleEditTask(true);
    }
  };

  return (
    <div
      className={classnames(
        style.taskBoardItem,
        style.task,
        props.indentClassName,
        isTaskEdit ? style.taskActive : null
    )}
      draggable="true"
      onDragStart={(event) => props.dragStart(props.task)}
      onDragEnd={(event) => props.dragEnd(event)}
      onDrop={(event) => props.drop(event, props.task, props.boardId)}
      onDragOver={(event => props.dragOver(event))}
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
            <p className={classnames(style.taskView)}>{props.task.title} order: {props.task.order}</p>
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

const TaskItemMemo = memo(TaskItem);
export {TaskItemMemo as TaskItem};
