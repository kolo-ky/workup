import React, {FC, Fragment} from "react";

// redux
import {useSelector, useDispatch} from "react-redux";

// actions
import {addTaskAction} from "../../../store/actions/tasks";

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

const Main: FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => getTasks(state));
  const isLoading = useSelector(state => loading(state));

  const filteredTask = (boardId: number): Array<ITask> => {
    return tasks.filter(task => task.boardId === boardId);
  };

  const handleAddTask = (task: ITask) => {
    dispatch(addTaskAction(task))
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
                    <Component tasks={filteredTask(board.id)} boardId={board.id} title={board.title} key={`$board-${board.id}`}/>
                  )})
                }
              </section>
           </Fragment>)}
    </MainLayout>
  );
};

export {Main as MainScreen};
