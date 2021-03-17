import React, {FC, DragEvent} from 'react';

// styles
import classnames from "classnames";
import style from "../../assets/common-styles/comon.style.css";

// proxy
import {TaskItemProxy} from '../../proxy/task-item-proxy';

// utils
import {determineStatus} from "../../utils/determine-status";

// type
import type {ITask} from "../../interfaces/task.interface";
import {ITaskList} from "../../interfaces/task-list.interface";

// hooks
import {useReorder} from "../../hooks/use-reorder";
import {useDispatch} from "react-redux";

// actions
import {setMessageAction} from "../../store/actions/messages";

const TaskList: FC<ITaskList> = (
  {
    tasks,
    droppedTask,
    boardId,
    children,
    setTask
  }) => {
  const {withLocalState, sendSnapShot} = useReorder();
  const dispatch = useDispatch();

  const sendTaskToBoard = (boardId: number, task?: ITask) => {
    let newTask = {
      ...droppedTask,
      order: task ? task.order : 0,
      boardId
    };

    newTask = determineStatus(newTask, boardId);

    withLocalState(newTask, () => dispatch(
      setMessageAction({
        type: 'success',
        message: `Задача ${droppedTask.title} перемещена`
      })));
    sendSnapShot(tasks, newTask);
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
