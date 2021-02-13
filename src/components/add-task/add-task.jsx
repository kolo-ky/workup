import React from "react";

// style
import style from './add-task.module.css';
import buttonStyle from '../../assets/common-styles/comon.style.css';
import classnames from 'classnames';

const AddTask = () => {
  return (
    <section className={classnames(style.addTask)}>
      <form className={classnames(style.addTaskForm)} aria-label="Форма добавления задачи">
        <div className={classnames(style.addTaskInputWrapper)}>
          <label htmlFor="add-task">Новая задача</label>
          <input type="text" name="task-name" id="add-task" placeholder="Название задачи..." required />
        </div>
        <button className={classnames(style.addTaskButton, buttonStyle.button)} type="submit">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10.0833" y="3.66663" width="1.83333" height="14.6667" fill="white"/>
            <rect x="18.3333" y="10.0833" width="1.83333" height="14.6667" transform="rotate(90 18.3333 10.0833)"
                  fill="white"/>
          </svg>
          <span>Добавить</span>
        </button>
      </form>
    </section>
  );
};

export default AddTask;
