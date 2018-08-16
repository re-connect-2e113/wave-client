import * as React from 'react';
import HerMessage from './HerMessage';
import YourMessage from './YourMessage';
import { BOT_SAN, IMessage } from '../models/message';

interface IMessageLogProps {
  messages: IMessage[];
}

const messageLog: React.StatelessComponent<IMessageLogProps> = props => {
  const messageBalloons = props.messages.map(
    message =>
      message.sender === BOT_SAN ? (
        <YourMessage message={message.text} />
      ) : (
        <HerMessage message={message.text} />
      )
  );
  return <div>{messageBalloons}</div>;
};

export default messageLog;
