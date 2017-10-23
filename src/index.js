import React from 'react';
import ReactDOM from 'react-dom';

// import { createStore } from 'redux';

import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './components/App';

// import chelasReducer from './reducers/chelasReducers';
// const store = createStore(chelasReducer);

// import rootReducer from './reducers';
// const store = createStore(rootReducer);

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));