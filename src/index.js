import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index';
import App from './routes/app';

const Store = createStore(reducer, null);

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);