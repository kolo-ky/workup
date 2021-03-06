// redux
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

// reducer
import {reducer} from "./reducers/root-reducer";

export const store = createStore(reducer, applyMiddleware(thunk));
