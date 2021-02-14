import React from 'react';
import PropTypes from 'prop-types';

// styles
import classnames from "classnames";
import style from "../../assets/common-styles/comon.style.css";

// components
import TaskItem from '../task-item/task-item';

// types
import task from '../../types/task';

const TaskList = ({tasks, children}) => {
  return (
    <div className={classnames(style.taskBoardList)}>
      {
        tasks.length
          ?
            tasks.map(task => (
              <TaskItem task={task} key={`$task-${task.id}`}/>
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
