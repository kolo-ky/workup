import React from 'react';
import {Route, Redirect} from "react-router-dom";
import PropTypes from 'prop-types';

// routes
import {routes} from "../../routes";

// redux
import {useSelector} from 'react-redux';

// selectors
import {getAuth} from "../../store/reducers/user-reducer/selectors";

const PrivateRoute = ({component: Component, ...rest}) => {
  const isAuth = useSelector((state) => getAuth(state));

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to={routes(`login`)} />
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

export default PrivateRoute;
