import React from 'react';

// styles
import style from '../../assets/common-styles/comon.style.css';
import styleTrashEmpty from './trash-empty.module.css';
import classnames from 'classnames';

const TrashEmpty = () => {
  return (
    <div className={classnames(styleTrashEmpty.taskBoardItem, style.task, style.taskEmpty)}>
      <p>Корзина пуста</p>
    </div>
  );
};

export default TrashEmpty;
