import React from 'react';
import PropTypes from 'prop-types';

// styles
import classnames from "classnames";
import style from "../../assets/common-styles/comon.style.css";

// proxy
import TaskItemProxy from '../../proxy/task-item.proxy';

// types
import task from '../../types/task';

const TaskList = ({tasks, children}) => {
  return (
    <div className={classnames(style.taskBoardList)}>
      {
        tasks.length
          ?
          tasks.map((task) => (
            <TaskItemProxy task={task} key={`$task-${task.id}`}/>
          ))
          :
          children
      }
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape(task)),
  children: PropTypes.object
};

export default TaskList;
