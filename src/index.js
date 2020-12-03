import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './routers/AppRouter';

import './scss/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
