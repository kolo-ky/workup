import React, {FC, DragEvent, ReactNode} from 'react';

// styles
import classnames from "classnames";
import style from "../../assets/common-styles/comon.style.css";

// proxy
import {TaskItemProxy} from '../../proxy';

// type
import type {ITask} from "../../interfaces/task.interface";

// redux
import {useDispatch} from "react-redux";

// actions
import {fetchPutTask} from '../../store/async-actions/tasks';

interface ITaskList {
  tasks: Array<ITask>,
  droppedTask: ITask,
  setTask(task: ITask): void,
  movedTask(title: string): void,
  boardId: number,
  children?: ReactNode
}

const TaskList: FC<ITaskList> = (
  {
    tasks,
    droppedTask,
    boardId,
    children,
    setTask,
    movedTask,
  }) => {
  const dispatch = useDispatch();

  const dragStartHandler = (task: ITask) => {
    setTask(task);
  };

  const dropHandler = (event: DragEvent<HTMLDivElement>, boardId: number) => {
    event.preventDefault();
    if (droppedTask.boardId !== boardId) {
      let requestParams = {
        id: droppedTask.id,
        data: {
          ...droppedTask,
          boardId
        }
      };
      // @ts-ignore
      dispatch(fetchPutTask(requestParams)).then(() => {
        movedTask(droppedTask.title)
      });
    }
  };

  const dragLeaveHandler = (event: DragEvent<HTMLDivElement>) => {
    //console.log('handleDragEnd', droppedTask);
  };

  const dragEndHandler = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    //console.log('handleDragEnd', droppedTask);
  };

  const dragOverHandler = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      className={classnames(style.taskBoardList)}
    >
      {
        tasks.length
          ?
          tasks.map((task) => (
            <TaskItemProxy
              task={task}
              boardId={boardId}
              key={`$task-${task.id}`}
              dragStart={dragStartHandler}
              dragEnd={dragEndHandler}
              drop={dropHandler}
              dragOver={dragOverHandler}
            />
          ))
          :
          children
      }
    </div>
  );
};

export {TaskList};
