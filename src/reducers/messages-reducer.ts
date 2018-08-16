import { IMessage } from '../models/message';
import { TMessageAction, MessageActionType } from '../actions/mesages';

export default function messagesReducer(
  state: IMessage[] = [],
  action: TMessageAction
) {
  switch (action.type) {
    case MessageActionType.addMessage:
      return [...state, action.message];
    default:
      return state;
  }
}
