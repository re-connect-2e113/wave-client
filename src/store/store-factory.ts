import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';
import messageMiddleware from '../middlewares/message-middleware';

const logger = (<any>createLogger)({
  level: 'info',
  collapsed: true
});

export default function storeFactory(initialState: Object) {
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(logger, messageMiddleware))
  );
  return store;
}
