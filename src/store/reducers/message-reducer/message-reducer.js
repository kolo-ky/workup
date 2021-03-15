// actions
import {MessagesActions} from "../../actions/messages";

const initialState = {
  messages: []
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case MessagesActions.SET_MESSAGE:
      return {...state, messages: [...state.messages, action.payload]};
    case MessagesActions.REMOVE_MESSAGE:
      return state;
  }
  return state;
};

export {messageReducer};
