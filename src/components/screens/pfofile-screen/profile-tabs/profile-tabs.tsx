import React, {FC, Fragment, useState} from 'react';

// styles
import styles from './profile-tabs.module.css';
import classnames from "classnames";

// components
import {Information} from "./tabs-content/information";
import {Statistic} from "./tabs-content/statistic";

const ProfileTabs: FC = () => {
  const [activeTab, setActive] = useState<string>('information');

  const tabsItems = [
    {
      title: 'Информация',
      name: 'information',
      component: Information
    },
    {
      title: 'Статистика',
      name: 'statistic',
      component: Statistic
    }
  ];

  return (
    <Fragment>
      <ul className={classnames(styles.tabs)}>
        {tabsItems.map(tab => {
            return (
              <li
                className={classnames(styles.tabItem, activeTab === tab.name ? styles.tabItemActive : null)}
                key={`key-tab-${tab.name}`}
                onClick={() => setActive(tab.name)}
              >
                {tab.title}
              </li>
            );
          })}
      </ul>
      {tabsItems.map(tab => {
        const Component = tab.component
        {
          return activeTab === tab.name && (<Component key={`key-component-${tab.name}`}/>)
        }
      })}
    </Fragment>
  );
};

export {ProfileTabs};
