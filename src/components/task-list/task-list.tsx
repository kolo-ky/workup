import React, {FC, DragEvent, ReactNode} from 'react';

// styles
import classnames from "classnames";
import style from "../../assets/common-styles/comon.style.css";

// proxy
import {TaskItemProxy} from '../../proxy';

// type
import type {ITask} from "../interface/task.interface";

interface ITaskList {
  tasks: Array<ITask>,
  boardId: number,
  children?: ReactNode
}

const TaskList: FC<ITaskList> = ({tasks, boardId, children}) => {
  const handleDragStart = (task: ITask) => {
    console.log('board start. Prev boardId = ', task.boardId);
  };

  const handleDragEnd = (task: ITask) => {
    console.log('board end', task.boardId);
  };

  const handleOnDrop = (event: DragEvent<HTMLDivElement>, boardId: number) => {
    event.preventDefault();
    console.log('board drop. Next boardId = ', boardId);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      className={classnames(style.taskBoardList)}
      onDrop={(event) => handleOnDrop(event, boardId)}
      onDragOver={(event) => handleDragOver(event)}
    >
      {
        tasks.length
          ?
          tasks.map((task) => (
            <TaskItemProxy task={task} key={`$task-${task.id}`} dragStart={handleDragStart} dragEnd={handleDragEnd}/>
          ))
          :
          children
      }
    </div>
  );
};

export {TaskList};
