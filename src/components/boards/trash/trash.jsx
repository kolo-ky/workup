import React from "react";
import PropTypes from 'prop-types';

// styles
import style from '../../../assets/common-styles/comon.style.css';
import trashStyle from './trash.module.css';
import classnames from 'classnames';

// components
import TaskList from "../../task-list/task-list";
import TrashEmpty from "../../trash-empty/trash-empty";

// types
import task from "../../../types/task";

// icons
import icons from '../../../assets/icons/icons';

const Trash = ({tasks, title}) => {
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

Trash.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape(task)),
  title: PropTypes.string.isRequired
};

export default Trash;
