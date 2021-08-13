import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import promiseMiddleware from 'redux-promise'
import App from './component/App'

import reducers from './reducers'

const createStorewithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStorewithMiddleware(reducers)}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);


