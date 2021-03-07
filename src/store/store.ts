// redux
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

// reducer
import {reducer} from "./reducers/root-reducer";

// extension
import {composeWithDevTools} from "redux-devtools-extension";

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
