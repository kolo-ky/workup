import React, {FC} from "react";

// style
import style from './add-task.module.css';
import buttonStyle from '../../assets/common-styles/comon.style.css';
import classnames from 'classnames';

// icons
import icons from '../../assets/icons/icons';

const AddTask: FC = () => {
  return (
    <section className={classnames(style.addTask)}>
      <form className={classnames(style.addTaskForm)} aria-label="Форма добавления задачи">
        <div className={classnames(style.addTaskInputWrapper)}>
          <label htmlFor="add-task">Новая задача</label>
          <input type="text" name="task-name" id="add-task" placeholder="Название задачи..." required />
        </div>
        <button className={classnames(style.addTaskButton, buttonStyle.button)} type="submit">
          <img src={icons.addIcon} alt="Добавить новую задачу"/>
          <span>Добавить</span>
        </button>
      </form>
    </section>
  );
};

export {AddTask};
