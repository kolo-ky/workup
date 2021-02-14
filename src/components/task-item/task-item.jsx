import React, {useState} from 'react';

// styles
import classnames from "classnames";
import style from "../../assets/common-styles/comon.style.css";

const TASK_COLOR_BY_BOARD_ID = {
  0: 'taskBacklog',
  1: 'taskProcessing',
  2: 'taskDone',
  3: 'taskBasket',
}

const TaskItem = ({task}) => {
  const [isTaskEdit, toggleEditTask] = useState();
  const [taskTitle, setTaskTitle] = useState(task.title);

  const handleSetTaskTitle = ({target}) => {
    setTaskTitle(target.value);
  }

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
      style[TASK_COLOR_BY_BOARD_ID[task.boardId]],
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

export default TaskItem;
