import React, {useState} from 'react';

// styles
import classnames from "classnames";
import style from "../../assets/common-styles/comon.style.css";

const TaskItem = ({task}) => {
  const [isTaskEdit, toggleEditTask] = useState();
  const [taskTitle, setTaskTitle] = useState(task.title);

  const handleSetTaskTitle = ({target}) => {
    setTaskTitle(target.value);
    console.log(taskTitle);
  }

  const handleToggleTask = () => {
    if (isTaskEdit) {
      console.log('emit task');
      toggleEditTask(false);
    } else {
      toggleEditTask(true);
    }
  };

  return (
    <div className={classnames(style.taskBoardItem, style.task, isTaskEdit ? style.taskActive : null)}>
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
