import { Action } from 'redux';
import { IMessage, TBOT_SAN } from '../models/message';

export enum MessageActionType {
  addMessage = 'ADD_MESSAGE'
}

export interface IAddMessageAction extends Action {
  type: MessageActionType.addMessage;
  message: IMessage;
}

export type TMessageAction = IAddMessageAction;

export function addMessage(
  sender: string | TBOT_SAN,
  text: string
): IAddMessageAction {
  return {
    type: MessageActionType.addMessage,
    message: { sender, text }
  };
}
