// actions
import {togglePendingAction, requiredAuthAction, setUserAction, removeUserAction} from "../actions/user";
import {fetchTasks} from "./tasks";

// api
import {checkAuthApi, findUserApi, loginUserApi, logoutUserApi, registrationUserApi} from "../../api/user";

export const fetchCheckAuth = (userData) => (dispatch, _getState) => {
  return checkAuthApi(userData.id).then((user) => {
    if (!user.length) {
      dispatch(requiredAuthAction(false));
      dispatch(togglePendingAction());
      return Promise.reject();
    } else {
      const [authUser] = user;
      dispatch(requiredAuthAction(authUser.authorized));
      dispatch(togglePendingAction());
      return Promise.resolve();
    }
  }).catch((error) => {
    return Promise.reject(error);
  });
};

export const fetchLogin = (userData) => (dispatch, _getState) => {
  return findUserApi(userData.email).then((response) => {
    return loginUserApi(response.data[0].id).then(() => {
      const [user] = response.data;

      dispatch(setUserAction({id: Number(user.id), email: userData.email}));
      dispatch(requiredAuthAction(true));
      dispatch(fetchTasks(user));

      return Promise.resolve();
    });
  });
};

export const fetchLogout = (user) => (dispatch, _getState) => {
  return logoutUserApi(user.id).then(() => {
    dispatch(removeUserAction({id: 0, email: ``}));
    return Promise.resolve();
  });
};

export const fetchRegistration = (user) => () => {
  return registrationUserApi(user).then(() => {
    return Promise.resolve();
  });
};
