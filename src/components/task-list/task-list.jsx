import React from 'react';

// styles
import classnames from "classnames";
import style from "../../assets/common-styles/comon.style.css";

// components
import TaskItem from '../task-item/task-item';

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

export default TaskList;
