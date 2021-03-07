import React, {FC} from "react";
import PropTypes from 'prop-types';

// styles
import style from '../../../assets/common-styles/comon.style.css';
import doneStyle from './done.module.css';
import classnames from 'classnames';

// components
import {TaskList} from "../../task-list";
import {TaskEmpty} from "../../task-empty";

// types
import type {IBoards} from "../../../interfaces/boards.interface";

interface IDone extends IBoards {}

const Done: FC<IDone> = ({tasks, boardId, title}) => {
  return (
    <article className={classnames(style.taskBoardGroup, doneStyle.taskBoardGroupDone)}>
      <h3 className={classnames(style.taskBoardGroupHeading, doneStyle.taskBoardGroupHeadingDone)}>{title}</h3>
      <TaskList tasks={tasks} boardId={boardId}>
        <TaskEmpty />
      </TaskList>
    </article>
  );
};

export {Done};
