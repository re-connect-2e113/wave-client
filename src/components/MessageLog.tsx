import * as React from 'react';
import { connect } from 'react-redux';
import HerMessage from './HerMessage';
import YourMessage from './YourMessage';
import { BOT_SAN, IMessage } from '../models/message';
import { IState } from '../reducers/index';
import * as styles from './MessageLog.css';

interface IMessageLogProps {
  messages: IMessage[];
}

function mapStateToProps(state: IState): IMessageLogProps {
  return {
    messages: state.messages
  };
}

const messageLog: React.StatelessComponent<IMessageLogProps> = props => {
  const herMessageClasses = `${styles.logHerMessage} ${styles.logMessage}`;
  const yourMessageClasses = `${styles.logYourMessage} ${styles.logMessage}`;
  const messageBalloons = props.messages.map(
    (message, index) =>
      message.sender === BOT_SAN ? (
        <YourMessage
          message={message.text}
          key={index}
          className={yourMessageClasses}
        />
      ) : (
        <HerMessage
          message={message.text}
          senderName={message.sender}
          key={index}
          className={herMessageClasses}
        />
      )
  );
  return <div className={styles.messageLogs}>{messageBalloons}</div>;
};

export default connect(mapStateToProps)(messageLog);
