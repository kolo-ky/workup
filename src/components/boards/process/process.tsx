import React, {FC} from 'react';
import PropTypes from 'prop-types';

// styles
import style from '../../../assets/common-styles/comon.style.css';
import processStyle from './process.module.css';
import classnames from 'classnames';

// components
import TaskList from "../../task-list/task-list";
import TaskEmpty from "../../task-empty/task-empty";

// types
import type {IBoards} from "../../interface/boards.interface";

interface IProcess extends IBoards {}

const Process: FC<IProcess> = ({tasks, title}) => {
  return (
    <article className={classnames(style.taskBoardGroup, processStyle.taskBoardGroupProcessing)}>
      <h3 className={classnames(style.taskBoardGroupHeading, processStyle.taskBoardGroupHeadingProcessing)}>{title}</h3>
      <TaskList tasks={tasks}>
        <TaskEmpty />
      </TaskList>
    </article>
  );
};

export {Process};