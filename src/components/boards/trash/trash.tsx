import React, {FC} from "react";
import PropTypes from 'prop-types';

// styles
import style from '../../../assets/common-styles/comon.style.css';
import trashStyle from './trash.module.css';
import classnames from 'classnames';

// components
import {TaskList} from "../../task-list";
import {TrashEmpty} from "../../trash-empty";

// icons
import icons from '../../../assets/icons/icons';

// types
import type {IBoards} from "../../interface/boards.interface";

interface ITrash extends IBoards {}

const Trash: FC<ITrash> = ({tasks, title}) => {
  return (
    <article className={classnames(style.taskBoardGroup, trashStyle.taskBoardGroupBasket)}>
      <h3 className={classnames(style.taskBoardGroupHeading, trashStyle.taskBoardGroupHeadingBasket)}>{title}</h3>
      <TaskList tasks={tasks}>
        <TrashEmpty />
      </TaskList>
      {
        tasks.length > 0 && (
          <button className={classnames(style.taskBoardButton, style.button, style.buttonClear)} type="button">
            <img src={icons.deleteIcon} alt="Очистить список задач"/>
            <span>Очистить</span>
          </button>
        )
      }
    </article>
  );
};

export {Trash};
