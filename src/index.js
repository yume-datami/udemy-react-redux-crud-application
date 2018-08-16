import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './index.css';
import reducer from './reducers'
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer)

ReactDOM.render(
  <Proider store={store}>
    <App /> 
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
