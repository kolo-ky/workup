// actions
import {UserActions} from "../../actions/user";

// user storage
import {userStorage} from "../../local-storage";

const initialState = {
  user: {
    ...userStorage.getUser(),
  },
  isAuthorized: false,
  pending: true
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActions.TOGGLE_PENDING:
      return {...state, pending: !state.pending};
    case UserActions.REQUIRED_AUTH:
      return {...state, isAuthorized: action.payload};
    case UserActions.SET_USER:
      userStorage.putUser(action.payload);
      return {...state, user: {...action.payload}};
    case UserActions.REMOVE_USER:
      userStorage.removeUser();
      return {...state, user: {...action.payload}};
  }

  return state;
};

export {userReducer};
