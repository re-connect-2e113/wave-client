import * as React from 'react';
import { connect } from 'react-redux';
import HerMessage from './HerMessage';
import YourMessage from './YourMessage';
import { BOT_SAN, IMessage } from '../models/message';
import { IState } from '../reducers/index';
import * as styles from './MessageLog.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
        <CSSTransition
          key={index}
          timeout={200}
          classNames={{
            enter: styles.rrevealEnter,
            enterActive: styles.rrevealEnterActive
          }}
        >
          <YourMessage message={message.text} className={yourMessageClasses} />
        </CSSTransition>
      ) : (
        <CSSTransition
          key={index}
          timeout={200}
          classNames={{
            enter: styles.lrevealEnter,
            enterActive: styles.lrevealEnterActive
          }}
        >
          <HerMessage
            message={message.text}
            senderName={message.sender}
            className={herMessageClasses}
          />
        </CSSTransition>
      )
  );
  return (
    <TransitionGroup className={styles.messageLogs} component="div">
      {messageBalloons}
    </TransitionGroup>
  );
};

export default connect(mapStateToProps)(messageLog);
