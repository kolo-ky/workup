import React from "react";

// styles
import style from '../../../assets/common-styles/comon.style.css';
import trashStyle from './trash.module.css';
import classnames from 'classnames';

// components
import TaskList from "../../task-list/task-list";
import TrashEmpty from "../../trash-empty/trash-empty";

const Trash = ({tasks}) => {
  return (
    <article className={classnames(style.taskBoardGroup, trashStyle.taskBoardGroupBasket)}>
      <h3 className={classnames(style.taskBoardGroupHeading, trashStyle.taskBoardGroupHeadingBasket)}>Корзина</h3>
      <TaskList tasks={tasks}>
        <TrashEmpty />
      </TaskList>

      <button className={classnames(style.taskBoardButton, style.button, style.buttonClear)} type="button">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="15.5374" y="5.16638" width="1.83333" height="14.6667" transform="rotate(45 15.5374 5.16638)"
                fill="white"/>
          <rect x="16.8337" y="15.5372" width="1.83333" height="14.6667" transform="rotate(135 16.8337 15.5372)"
                fill="white"/>
        </svg>
        <span>Очистить</span>
      </button>
    </article>
  );
};

export default Trash;
