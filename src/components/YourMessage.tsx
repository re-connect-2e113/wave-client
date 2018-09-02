import * as React from 'react';
import Balloon from './Balloon';
import * as styles from './YourMessage.css';

interface IYourMessageProps {
  message: string;
}

const yourMessage: React.StatelessComponent<IYourMessageProps> = props => {
  return (
    <div className={styles.root}>
      <div>
        <p className={styles.yourMessageActionLog}>YOU WROTE...</p>
        <Balloon fromLeft={false} message={props.message} />
      </div>
    </div>
  );
};

export default yourMessage;
