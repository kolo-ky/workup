import React from "react";

const Backlog = () => {
  return (
    <article className="taskboard__group taskboard__group--backlog">
      <h3 className="taskboard__group-heading taskboard__group-heading--backlog">Бэклог</h3>
      <div className="taskboard__list">
        <div className="taskboard__item task task--active">
          <div className="task__body">
            <p className="task__view">Название первой задачи</p>
            <input className="task__input" type="text" value="Название первой задачи" />
          </div>
          <button className="task__edit" type="button" aria-label="Изменить"></button>
        </div>
        <div className="taskboard__item task">
          <div className="task__body">
            <p className="task__view">Название первой задачи</p>
            <input className="task__input" type="text" value="Название первой задачи" />
          </div>
          <button className="task__edit" type="button" aria-label="Изменить"></button>
        </div>
        <div className="taskboard__item task">
          <div className="task__body">
            <p className="task__view">Название первой задачи</p>
            <input className="task__input" type="text" value="Название первой задачи" />
          </div>
          <button className="task__edit" type="button" aria-label="Изменить"></button>
        </div>
        <div className="taskboard__item task">
          <div className="task__body">
            <p className="task__view">Название первой задачи</p>
            <input className="task__input" type="text" value="Название первой задачи" />
          </div>
          <button className="task__edit" type="button" aria-label="Изменить"></button>
        </div>
        <div className="taskboard__item task">
          <div className="task__body">
            <p className="task__view">Название первой задачи</p>
            <input className="task__input" type="text" value="Название первой задачи" />
          </div>
          <button className="task__edit" type="button" aria-label="Изменить"></button>
        </div>
      </div>
    </article>
  );
};

export default Backlog;
