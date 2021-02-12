import React from "react";

const Done = () => {
  return (
    <article className="taskboard__group taskboard__group--done">
      <h3 className="taskboard__group-heading taskboard__group-heading--done">Готово</h3>
      <div className="taskboard__list taskboard__list--sorted">
        <div className="taskboard__item task task--empty">
          <p>Перетащите карточку</p>
        </div>
        <div className="taskboard__item task task--done task--active">
          <div className="task__body">
            <p className="task__view">Название первой задачи</p>
            <input className="task__input" type="text" value="Название первой задачи" />
          </div>
          <button className="task__edit" type="button" aria-label="Изменить"></button>
        </div>
        <div className="taskboard__item task task--processing">
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

export default Done;
