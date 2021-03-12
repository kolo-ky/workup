import React, {FC} from 'react';

// redux
import {useSelector} from "react-redux";

// selectors
import {getUser} from "../../../../../../store/reducers/user-reducer/selectors";

// styles
import classnames from "classnames";
import styles from './information.module.css';

const Information: FC = () => {
  const user = useSelector((state) => getUser(state));
  return (
    <ul className={classnames(styles.information)}>
      <li className={classnames(styles.informationItem)}>
        <strong>Email:</strong> {user.email}
      </li>
    </ul>
  );
};

export {Information};
