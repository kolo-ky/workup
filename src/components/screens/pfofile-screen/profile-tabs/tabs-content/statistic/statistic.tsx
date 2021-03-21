import React, {FC} from 'react';

// styles
import classnames from "classnames";
import style from './statistic.module.css';

// redux
import {useSelector} from "react-redux";

// selectors
import {getTasks} from "../../../../../../store/reducers/task-reducer/selectors";

// utils
import {makeChartData} from "../../../../../../utils/make-chart-data";

import {Chart} from './chart/line-chart';

const Statistic: FC = () => {
  const tasks = useSelector((state) => getTasks(state));
  let chartData = makeChartData(tasks);

  return (
    <div className={classnames(style.root)}>
      <h1 className={style.title}>Статистика за текущий месяц</h1>
      <div className={style.chart}>
        <Chart data={chartData}/>
      </div>
    </div>
  );
};

export {Statistic};
