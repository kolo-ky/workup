import React, {FC, Fragment, useState} from "react";

// redux
import {useSelector, useDispatch} from "react-redux";

// actions
import {fetchAddTask} from '../../../store/async-actions/tasks';
import {setMessageAction} from "../../../store/actions/messages";

// hooks
import {useReorder} from "../../../hooks/use-reorder";

// selectors
import {getTasks, loading} from '../../../store/reducers/task-reducer/selectors';

// types
import type {IBoard} from "../../../interfaces/board.interface";
import type {ITask} from "../../../interfaces/task.interface";

// style
import style from './main-module.css';
import classnames from 'classnames';

// components
import {AddTask} from "../../add-task";
import boardsArray from '../../boards/boards';
import {MainLayout} from "../../layouts/main-layout";
import {Loading} from "../../loading";
import {PopupProxy} from "../../../proxy/popup-proxy";

const Main: FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => getTasks(state));
  const [droppedTask, setDroppedTask] = useState(null);
  const isLoading = useSelector(state => loading(state));
  const {withLocalState, sendSnapShot} = useReorder();

  const filteredTask = (boardId: number): Array<ITask> => {
    return tasks.filter(task => task.boardId === boardId);
  };

  const updateTasksOrder = (newTask) => {
    const boardTasks = tasks.filter(task => task.boardId === newTask.boardId);

    if (boardTasks.length) {
      newTask.order = boardTasks[boardTasks.length - 1].order + 1;
    }

    return newTask;
  };

  const handleAddTask = (task: ITask) => {
    // @ts-ignore
    dispatch(fetchAddTask(updateTasksOrder(task))).then(() => {
      dispatch(setMessageAction({
        type: 'success',
        message: 'Задача добавлена'
      }));
    }).catch(() => {
      dispatch(setMessageAction({
        type: 'fail',
        message: 'Ошибка сервера'
      }));
    });

    withLocalState(task);
    sendSnapShot(tasks, task);
  };

  const handleSetTask = (task: ITask) => {
    setDroppedTask(task);
  };

  const boards: Array<IBoard> = boardsArray;

  return (
    <MainLayout>
      {isLoading
        ?
          <Loading />
        :
          (<Fragment>
              <AddTask addTask={handleAddTask}/>
              <section className={classnames(style.taskBoard)}>
                {boards.map((board: IBoard) => {
                  const Component = board.component;
                  return (
                    <Component
                      tasks={filteredTask(board.id)}
                      droppedTask={droppedTask}
                      setTask={handleSetTask}
                      boardId={board.id}
                      title={board.title}
                      key={`$board-${board.id}`}
                    />
                  )})
                }
              </section>
              <PopupProxy />
           </Fragment>)}
    </MainLayout>
  );
};

export {Main as MainScreen};
