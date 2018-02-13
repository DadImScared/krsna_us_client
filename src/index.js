import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'rc-slider/assets/index.css';
import './index.css';
import Base from './components/Base';
import registerServiceWorker from './registerServiceWorker';


import reducer from './reducers';
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Base />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
