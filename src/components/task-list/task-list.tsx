import React, {FC, ReactNode} from 'react';

// styles
import classnames from "classnames";
import style from "../../assets/common-styles/comon.style.css";

// proxy
import TaskItemProxy from '../../proxy/task-item.proxy';

// type
import type {ITask} from "../interface/task.interface";

interface ITaskList {
  tasks: Array<ITask>,
  children?: ReactNode
}

const TaskList: FC<ITaskList> = ({tasks, children}) => {
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

export {TaskList};
