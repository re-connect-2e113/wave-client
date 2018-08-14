import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Wave from './Wave';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Wave />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
