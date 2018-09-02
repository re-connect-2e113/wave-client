import { Middleware, MiddlewareAPI, Dispatch } from 'redux';
import {
  MessageActionType,
  addMessage,
  ISendMessageAction
} from '../actions/mesages';
import { BOT_SAN } from '../models/message';

const messageMiddleware: Middleware = (api: MiddlewareAPI) => (
  next: Dispatch
  // FIXME: もっと型安全に
) => (action: any) => {
  // TODO: なんで即時レスポンス返ってくるの？ココロにpushしてくるメッセージをくれるはず
  if (action.type === MessageActionType.sendMessage) {
    fetch(`${process.env.REACT_APP_WAVE_SERVER_URL}/messages`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({ text: (action as ISendMessageAction).text }),
      headers: new Headers({ 'Content-type': 'application/json' })
    })
      .then(res => res.json())
      .then(json => {
        if (json['her_message'] !== undefined) {
          // 理解してもらえた場合
          next(addMessage(json['sender_name'], json['her_message']));
        }
      });
    next(addMessage(BOT_SAN, (action as ISendMessageAction).text));
  }
  return next(action);
};

export default messageMiddleware;
