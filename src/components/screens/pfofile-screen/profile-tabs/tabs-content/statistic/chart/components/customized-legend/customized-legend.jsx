import React from 'react';

// styles
import style from './customized-legend.module.css';
import classnames from "classnames";

const CustomizedLegend = (props) => {
  return (
    <div className={style.root}>
      <ul className={style.legend}>
        {
          Object.keys(props.chartElements).map((elem, index) => {
            return (
              <li key={index} className={classnames(style.legendItem, style[`legendItem--${elem}`])}>
                {props.chartElements[elem].name}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export {CustomizedLegend};
