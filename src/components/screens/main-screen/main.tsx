import React, {FC, Fragment, useState} from "react";

// redux
import {useSelector, useDispatch} from "react-redux";

// actions
import {fetchAddTask} from '../../../store/async-actions/tasks';

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
import {Popup} from "../../popup";

const Main: FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => getTasks(state));
  const [popupMessage, setMessage] = useState({});
  const [droppedTask, setDroppedTask] = useState(null);
  const isLoading = useSelector(state => loading(state));

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
      setMessage({
        type: 'success',
        message: 'Задача добавлена'
      });
    }).catch(() => {
      setMessage({
        type: 'fail',
        message: 'Ошибка сервера'
      });
    });
  };

  const handleMovedTask = (title: string) => {
    setMessage({
      type: 'success',
      message: `Задача "${title}" перемещена`
    });
  }

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
                      movedTask={handleMovedTask}
                      boardId={board.id}
                      title={board.title}
                      key={`$board-${board.id}`}
                    />
                  )})
                }
              </section>
              <Popup message={popupMessage} />
           </Fragment>)}
    </MainLayout>
  );
};

export {Main as MainScreen};
