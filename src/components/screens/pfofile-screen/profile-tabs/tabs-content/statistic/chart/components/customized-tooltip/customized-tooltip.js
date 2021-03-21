import React from 'react';

// style
import style from './customized-tooltip.module.css';
import classnames from "classnames";

const CustomizedTooltip = ({active, payload, label, chartElements}) => {
  if (active && payload && payload.length) {
    return (
      <ul className={style.root}>
        <li className={style.rootItem}>{label}</li>
        {
          payload.map((item, index) => {
            return (
              <li
                key={index}
                className={classnames(style.rootItem, style[`rootItem--${item.dataKey}`])}
              >
                {chartElements[item.dataKey].name}: {item.value}
              </li>
            );
          })
        }
      </ul>
    );
  }
  return null;
};

export {CustomizedTooltip};
