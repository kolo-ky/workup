// actions
export const MessagesActions = {
  SET_MESSAGE: `SET_MESSAGE`,
  REMOVE_MESSAGE: `DELETE_MESSAGE`,
};

export const setMessageAction = (payload) => {
  return {
    type: MessagesActions.SET_MESSAGE,
    payload
  };
};

export const removeMessageAction = (payload) => {
  return {
    type: MessagesActions.REMOVE_MESSAGE,
    payload
  };
};
