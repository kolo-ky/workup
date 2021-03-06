import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from "react-redux";

// store
import {store} from "./store/store";

// components
import {App} from './components/app';

ReactDom.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById(`root`)
);
