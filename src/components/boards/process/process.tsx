import React, {FC} from 'react';

// styles
import style from '../../../assets/common-styles/comon.style.css';
import processStyle from './process.module.css';
import classnames from 'classnames';

// components
import {TaskList} from "../../task-list";
import {TaskEmpty} from "../../task-empty";

// types
import type {IBoards} from "../../../interfaces/boards.interface";

interface IProcess extends IBoards {}

const Process: FC<IProcess> = (props) => {
  return (
    <article className={classnames(style.taskBoardGroup, processStyle.taskBoardGroupProcessing)}>
      <h3 className={classnames(style.taskBoardGroupHeading, processStyle.taskBoardGroupHeadingProcessing)}>{props.title}</h3>
      <TaskList {...props}>
        <TaskEmpty />
      </TaskList>
    </article>
  );
};

export {Process};
