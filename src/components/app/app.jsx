import React from 'react';
import classnames from 'classnames';

// styles
import style from './app.module.css';

const App = () => {
  return (
    <main className={classnames(style.mainContainer)}>
      Hello, i'm working!
    </main>
  );
};

export default App;
