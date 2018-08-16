import { combineReducers } from 'redux';
import messagesReducer from './messages-reducer';
import { IMessage } from '../models/message';

const rootReducer = combineReducers({
  messages: messagesReducer
});

export interface IState {
  messages: IMessage[];
}

export default rootReducer;
