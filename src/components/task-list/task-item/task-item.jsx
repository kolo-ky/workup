import React, {useState} from 'react';
import PropTypes from 'prop-types';

// styles
import classnames from "classnames";
import style from "../../../assets/common-styles/comon.style.css";

// types
import taskType from '../../../types/task';

const TaskItem = ({task, indentClassName}) => {
  const [isTaskEdit, toggleEditTask] = useState();
  const [taskTitle, setTaskTitle] = useState(task.title);

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

TaskItem.propTypes = {
  task: PropTypes.shape(taskType),
  indentClassName: PropTypes.string
};

export default TaskItem;
