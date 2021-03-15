import React, {ChangeEvent, FC, useState, memo} from 'react';

// styles
import classnames from "classnames";
import style from "../../../assets/common-styles/comon.style.css";

// redux
import {useDispatch} from "react-redux";

// actions
import {fetchUpdateTask} from "../../../store/async-actions/tasks";

// types
import type {ICommonTaskItem} from "../../../interfaces/common-task-item.interface";

interface ITaskItem extends ICommonTaskItem {
  indentClassName: string
}

const TaskItem:FC<ITaskItem> = (props) => {
  const [isTaskEdit, toggleEditTask] = useState<boolean>(false);
  const [taskTitle, setTaskTitle] = useState<string>(props.task.title);
  const dispatch = useDispatch();

  const handleSetTaskTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };

  const keyPressHandler = (event) => {
    if (event.key === 'Enter') {
      // @ts-ignore
      dispatch(fetchUpdateTask({id: props.task.id, data: {title:taskTitle}})).then(() => {
        toggleEditTask(false);
      });
    }
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
              onKeyPress={(event) => keyPressHandler(event)}
            />
            :
            <p className={classnames(style.taskView)}>{props.task.title}</p>
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
