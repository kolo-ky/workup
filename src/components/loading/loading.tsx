import React, {FC} from 'react';

// styles
import style from './loading.module.css';
import classnames from "classnames";

const Loading: FC = () => {
  return (
    <section className={classnames(style.loading)}>
      Подождите, мы скоро загрузимся.
    </section>
  );
};

export {Loading};
