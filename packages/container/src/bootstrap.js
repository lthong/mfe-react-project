import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_PATH}>
    <App />
  </BrowserRouter>,
  document.getElementById('container-root')
);
