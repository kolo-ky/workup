import React, {FC, DragEvent, ReactNode} from 'react';

// styles
import classnames from "classnames";
import style from "../../assets/common-styles/comon.style.css";

// proxy
import {TaskItemProxy} from '../../proxy/task-item-proxy';

// type
import type {ITask} from "../../interfaces/task.interface";
import {ITaskList} from "../../interfaces/task-list.interface";

// hooks
import {useReorder} from "../../hooks/use-reorder";

const TaskList: FC<ITaskList> = (
  {
    tasks,
    droppedTask,
    boardId,
    children,
    setTask,
    movedTask,
  }) => {
  const {withLocalState, sendSnapShot} = useReorder();

  const sendTaskToBoard = (boardId: number, task?: ITask) => {
    const newTask = {
      ...droppedTask,
      order: task ? task.order : 0,
      boardId
    };

    withLocalState(newTask, () => movedTask(droppedTask.title));
    sendSnapShot(tasks, newTask)
  };

  const dragStartHandler = (task: ITask) => {
    setTask(task);
  };

  const dropHandler = (event: DragEvent<HTMLDivElement>, task: ITask, boardId: number) => {
    event.preventDefault();
    sendTaskToBoard(boardId, task);
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

  const onDropBoardHandler = (event: DragEvent<HTMLDivElement>, boardId: number) => {
    if (tasks.length === 0) {
      sendTaskToBoard(boardId);
    }
  };

  return (
    <div
      className={classnames(style.taskBoardList)}
      onDragOver={(event) => dragOverHandler(event)}
      onDrop={(event) => onDropBoardHandler(event, boardId)}
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
