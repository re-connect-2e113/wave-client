import * as React from 'react';
import Balloon from './Balloon';
import * as styles from './YourMessage.css';
import classNameProps from '../class-name-props';
import utils from '../utils';

interface IYourMessageProps {
  message: string;
}

const yourMessage: React.StatelessComponent<
  IYourMessageProps & classNameProps
> = props => {
  return (
    <div className={`${utils.toStringOrEmpty(props.className)} ${styles.root}`}>
      <div>
        <p className={styles.yourMessageActionLog}>YOU WROTE...</p>
        <Balloon fromLeft={false} message={props.message} />
      </div>
    </div>
  );
};

export default yourMessage;
