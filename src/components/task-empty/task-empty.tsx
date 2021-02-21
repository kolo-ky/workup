import React, {FC} from 'react';

// styles
import style from '../../assets/common-styles/comon.style.css';
import styleTaskEmpty from './task-empty.module.css';
import classnames from 'classnames';

const TaskEmpty: FC = () => {
  return (
    <div className={classnames(styleTaskEmpty.taskBoardItem, style.task, style.taskEmpty)}>
      <p>Перетащите карточку</p>
    </div>
  );
};

export {TaskEmpty};
