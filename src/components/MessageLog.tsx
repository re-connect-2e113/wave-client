import * as React from 'react';
import { connect } from 'react-redux';
import HerMessage from './HerMessage';
import YourMessage from './YourMessage';
import { BOT_SAN, IMessage } from '../models/message';
import { IState } from '../reducers/index';

interface IMessageLogProps {
  messages: IMessage[];
}

function mapStateToProps(state: IState): IMessageLogProps {
  return {
    messages: state.messages
  };
}

const messageLog: React.StatelessComponent<IMessageLogProps> = props => {
  const messageBalloons = props.messages.map(
    (message, index) =>
      message.sender === BOT_SAN ? (
        <YourMessage message={message.text} key={index} />
      ) : (
        <HerMessage
          message={message.text}
          senderName={message.sender}
          key={index}
        />
      )
  );
  return <div>{messageBalloons}</div>;
};

export default connect(mapStateToProps)(messageLog);
