import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Wave from './Wave';
import { Provider } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import storeFactory from './store/store-factory';

const store = storeFactory({});

ReactDOM.render(
  <Provider store={store}>
    <Wave />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
