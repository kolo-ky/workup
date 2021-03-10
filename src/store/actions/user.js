// actions
export const UserActions = {
  TOGGLE_PENDING: `TOGGLE_PENDING`,
  REQUIRED_AUTH: `REQUIRED_AUTH`,
  SET_USER: `SET_USER`,
  REMOVE_USER: `REMOVE_USER`
};

export const setUserAction = (payload) => {
  return {
    type: UserActions.SET_USER,
    payload
  };
};

export const removeUserAction = (payload) => {
  return {
    type: UserActions.REMOVE_USER,
    payload
  };
};

export const requiredAuthAction = (payload) => {
  return {
    type: UserActions.REQUIRED_AUTH,
    payload
  };
};

export const togglePendingAction = () => {
  return {
    type: UserActions.TOGGLE_PENDING
  };
};
