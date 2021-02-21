import React, {FC} from "react";
import PropTypes from 'prop-types';

// styles
import style from '../../../assets/common-styles/comon.style.css';
import backlogStyle from './backlog.module.css';
import classnames from 'classnames';

// components
import {TaskList} from '../../task-list';

// types
import type {IBoards} from "../../interface/boards.interface";

interface IBacklog extends IBoards {}

const Backlog: FC<IBacklog> = ({tasks, title}) => {
  return (
    <article className={classnames(style.taskBoardGroup, backlogStyle.taskBoardGroupBacklog)}>
      <h3 className={classnames(style.taskBoardGroupHeading, backlogStyle.taskBoardGroupHeadingBacklog)}>{title}</h3>
      <TaskList tasks={tasks}/>
    </article>
  );
};

export {Backlog};
