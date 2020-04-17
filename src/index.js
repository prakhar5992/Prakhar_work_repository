import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Customer from './CustomerDetails/CustomerDatails';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
