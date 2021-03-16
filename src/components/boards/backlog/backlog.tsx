import React, {FC} from "react";

// styles
import style from '../../../assets/common-styles/comon.style.css';
import backlogStyle from './backlog.module.css';
import classnames from 'classnames';

// components
import {TaskList} from '../../task-list';
import {TaskEmpty} from "../../task-empty";

// types
import type {IBoards} from "../../../interfaces/boards.interface";

interface IBacklog extends IBoards {}

const Backlog: FC<IBacklog> = (props) => {
  return (
    <article className={classnames(style.taskBoardGroup, backlogStyle.taskBoardGroupBacklog)}>
      <h3 className={classnames(style.taskBoardGroupHeading, backlogStyle.taskBoardGroupHeadingBacklog)}>{props.title}</h3>
      <TaskList {...props}>
        <TaskEmpty />
      </TaskList>
    </article>
  );
};

export {Backlog};
