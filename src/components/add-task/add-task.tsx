import React, {FC, useState, ChangeEvent, FormEvent} from "react";

// style
import style from './add-task.module.css';
import buttonStyle from '../../assets/common-styles/comon.style.css';
import classnames from 'classnames';

// icons
import icons from '../../assets/icons/icons';

const AddTask: FC = () => {
  const [task, setTask] = useState<string>('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <section className={classnames(style.addTask)}>
      <form
        className={classnames(style.addTaskForm)}
        aria-label="Форма добавления задачи"
        onSubmit={handleSubmit}
      >
        <div className={classnames(style.addTaskInputWrapper)}>
          <label htmlFor="add-task">Новая задача</label>
          <input
            type="text"
            name="task-name"
            id="add-task"
            placeholder="Название задачи..."
            required
            value={task}
            onChange={handleChange}
          />
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
