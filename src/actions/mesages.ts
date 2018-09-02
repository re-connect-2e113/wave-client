import { Action } from 'redux';
import { IMessage, TBOT_SAN } from '../models/message';

export enum MessageActionType {
  addMessage = 'ADD_MESSAGE',
  sendMessage = 'SEND_MESSAGE'
}

export interface IAddMessageAction extends Action {
  type: MessageActionType.addMessage;
  message: IMessage;
}

export interface ISendMessageAction extends Action {
  type: MessageActionType.sendMessage;
  text: string;
}

export type TMessageAction = IAddMessageAction | ISendMessageAction;

export function addMessage(
  sender: string | TBOT_SAN,
  text: string
): IAddMessageAction {
  return {
    type: MessageActionType.addMessage,
    message: { sender, text }
  };
}

export function sendMessage(text: string): ISendMessageAction {
  return {
    text,
    type: MessageActionType.sendMessage
  };
}
